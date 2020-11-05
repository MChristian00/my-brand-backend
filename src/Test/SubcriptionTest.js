import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import Subscription from "../Database/Models/Subscription";

chai.use(chaiHttp);

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjkxYjI2MGQyOTVmN2MzMzRkODhhYjkiLCJGaXJzdG5hbWUiOiJhZG1pbiIsIkxhc3RuYW1lIjoiYWRtaW4iLCJFbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsIlJvbGUiOiJhZG1pbiIsImlhdCI6MTYwMzM4MzkwNH0.zlm6wDYtJMJk4bdTYuUGgZzLuZhHqruKKQFbFTo0hlQ";
let subscriptionID;
let userID;

describe("SUBCRIPTION ROUTES", () => {
  before(() => {
    Subscription.remove({}, (err) => {
      console.log(err);
    });
  });

  it("should return an added subscription", (done) => {
    let newSubscription = {
      Name: "Er Hanah",
      Email: "erhanah@gmail.com",
    };

    chai
      .request(app)
      .post("/api/subscription/add")
      .send(newSubscription)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).haveOwnProperty("Subscription");
        expect(res.body.Subscription).to.haveOwnProperty("Name");
        expect(res.body.Subscription).to.haveOwnProperty("Email");
        subscriptionID = res.body.Subscription._id;
        done(err);
      });
  });

  it("should return array of all subscriptions", (done) => {
    chai
      .request(app)
      .get("/api/subscription")
      .set({ Authorization: `Bearer ${token}` })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.Subscriptions).to.be.a("array");
        expect(res.body.Subscriptions).to.have.lengthOf(1);
        done(err);
      });
  });

  it("should return a deleted subscription", (done) => {
    chai
      .request(app)
      .delete(`/api/subscription/${subscriptionID}`)
      .set({ Authorization: `Bearer ${token}` })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.haveOwnProperty("Subscription");
        expect(res.body.Subscription).to.haveOwnProperty("Name");
        expect(res.body.Subscription).to.haveOwnProperty("Email");
        done(err);
      });
  });
});
