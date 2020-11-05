import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import Query from "../Database/Models/Query";
import { userData } from "./UserTest";

chai.use(chaiHttp);

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjkxYjI2MGQyOTVmN2MzMzRkODhhYjkiLCJGaXJzdG5hbWUiOiJhZG1pbiIsIkxhc3RuYW1lIjoiYWRtaW4iLCJFbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsIlJvbGUiOiJhZG1pbiIsImlhdCI6MTYwMzM4MzkwNH0.zlm6wDYtJMJk4bdTYuUGgZzLuZhHqruKKQFbFTo0hlQ";
let queryID;
let userID;

describe("QUERY ROUTES", () => {
  before(() => {
    Query.remove({}, (err) => {
      console.log(err);
    });
  });

  it("should return an added query", (done) => {
    let newQuery = {
      QueryOwner: "Er Hanah",
      Email: "erhanah@gmail.com",
      QueryContent:
        "Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor.",
    };

    chai
      .request(app)
      .post("/api/queries/add")
      .send(newQuery)
      .end((err, res) => {
        queryID = res.body.Query._id;
        expect(res).to.have.status(201);
        expect(res.body).haveOwnProperty("Query");
        expect(res.body.Query).to.haveOwnProperty("QueryOwner");
        expect(res.body.Query).to.haveOwnProperty("Email");
        expect(res.body.Query).to.haveOwnProperty("QueryContent");
        done(err);
      });
  });

  it("should return array of all queries", (done) => {
    chai
      .request(app)
      .get("/api/queries")
      .set({ Authorization: `Bearer ${token}` })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.Queries).to.be.a("array");
        expect(res.body.Queries).to.have.lengthOf(1);
        done(err);
      });
  });

  it("should return a single query", (done) => {
    chai
      .request(app)
      .get(`/api/queries/${queryID}`)
      .set({ Authorization: `Bearer ${token}` })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.haveOwnProperty("Query");
        expect(res.body.Query).to.haveOwnProperty("QueryOwner");
        expect(res.body.Query).to.haveOwnProperty("Email");
        expect(res.body.Query).to.haveOwnProperty("QueryContent");
        done(err);
      });
  });

  it("should return a deleted query", (done) => {
    chai
      .request(app)
      .delete(`/api/queries/${queryID}`)
      .set({ Authorization: `Bearer ${token}` })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.haveOwnProperty("Query");
        expect(res.body.Query).to.haveOwnProperty("QueryOwner");
        expect(res.body.Query).to.haveOwnProperty("Email");
        expect(res.body.Query).to.haveOwnProperty("QueryContent");
        done(err);
      });
  });
});
