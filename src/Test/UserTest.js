import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import jwt from "jsonwebtoken";
import app from "../app";
import User from "../Database/Models/User";

chai.use(chaiHttp);

export let userData;
let userID;
let Token;

describe("USER ROUTES", () => {
  before(() => {
    User.remove({}, (err) => {
      console.log(err);
    });
  });

  it("should return a new user", (done) => {
    const newUser = {
      Firstname: "Er",
      Lastname: "Hanan",
      Email: "erhanan@gmail.com",
      Password: "1234567",
      retype_Password: "1234567",
    };
    chai
      .request(app)
      .post(`/api/auth/register`)
      .send(newUser)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.haveOwnProperty("Token");
        userData = jwt.decode(res.body.Token);
        userID = userData._id;
        done(err);
      });
  });

  it("should return a logged in user token", (done) => {
    const userCredentials = {
      Email: "erhanan@gmail.com",
      Password: "1234567",
    };
    chai
      .request(app)
      .post(`/api/auth/signin`)
      .send(userCredentials)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.haveOwnProperty("Token");
        Token = res.body.Token;
        done(err);
      });
  });

  it("should edit user profile", (done) => {
    const userDoc = {
      Email: "carmi1@gmail.com",
      Password: "123467",
    };
    chai
      .request(app)
      .put(`/api/auth/edit/5f9fc7d7ad3c282e9753d898`)
      .set({
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjkxYjI2MGQyOTVmN2MzMzRkODhhYjkiLCJGaXJzdG5hbWUiOiJhZG1pbiIsIkxhc3RuYW1lIjoiYWRtaW4iLCJFbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsIlJvbGUiOiJhZG1pbiIsImlhdCI6MTYwMzM4MzkwNH0.zlm6wDYtJMJk4bdTYuUGgZzLuZhHqruKKQFbFTo0hlQ",
      })
      .send(userDoc)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body)
          .to.haveOwnProperty("Message")
          .equal("User profile updated");
        done(err);
      });
  });

  it("should log user out", (done) => {
    chai
      .request(app)
      .get(`/api/auth/logout`)
      .set({ Authorization: `Bearer ${Token}` })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body)
          .to.haveOwnProperty("Message")
          .equal("Successfully logged out");
        done(err);
      });
  });
});
