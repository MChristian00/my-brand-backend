import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import Blog from "../Database/Models/Blog";
import { userData } from "./UserTest";

chai.use(chaiHttp);

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjkxYjI2MGQyOTVmN2MzMzRkODhhYjkiLCJGaXJzdG5hbWUiOiJhZG1pbiIsIkxhc3RuYW1lIjoiYWRtaW4iLCJFbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsIlJvbGUiOiJhZG1pbiIsImlhdCI6MTYwMzM4MzkwNH0.zlm6wDYtJMJk4bdTYuUGgZzLuZhHqruKKQFbFTo0hlQ";
let blogID;
let userID;

describe("BLOG ROUTES", () => {
  before(() => {
    Blog.remove({}, (err) => {
      console.log(err);
    });
  });

  it("should return an added blog", (done) => {
    let newBlog = {
      Title: "BLOG NOVA",
      Content:
        "Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor.",
    };

    chai
      .request(app)
      .post("/api/blogs/add")
      .set({ Authorization: `Bearer ${token}` })
      .send(newBlog)
      .end((err, res) => {
        blogID = res.body.Blog._id;
        expect(res).to.have.status(201);
        expect(res.body).haveOwnProperty("Blog");
        expect(res.body.Blog).to.haveOwnProperty("_id");
        expect(res.body.Blog).to.haveOwnProperty("Title");
        expect(res.body.Blog).to.haveOwnProperty("Content");
        done(err);
      });
  });

  it("should return array of all blogs", (done) => {
    chai
      .request(app)
      .get("/api/blogs")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.Blogs).to.be.a("array");
        expect(res.body.Blogs).to.have.lengthOf(1);
        done(err);
      });
  });

  it("should get a single blog", (done) => {
    chai
      .request(app)
      .get(`/api/blogs/${blogID}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.haveOwnProperty("Blog");
        expect(res.body.Blog).to.haveOwnProperty("_id");
        expect(res.body.Blog).to.haveOwnProperty("Title");
        expect(res.body.Blog).to.haveOwnProperty("Content");
        done(err);
      });
  });

  it("should return an edited blog", (done) => {
    let updatedBlog = {
      Title: "BLOG NOVA(edited)",
      Content:
        "Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor.",
    };
    chai
      .request(app)
      .put(`/api/blogs/${blogID}`)
      .set({ Authorization: `Bearer ${token}` })
      .send(updatedBlog)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.haveOwnProperty("Blog");
        expect(res.body.Blog).to.haveOwnProperty("_id");
        expect(res.body.Blog).to.haveOwnProperty("Title");
        expect(res.body.Blog).to.haveOwnProperty("Content");
        done(err);
      });
  });

  it("should return blog with a comment", (done) => {
    let comment = {
      Content: "Lorem ipsum dolor Lorem ipsum dolorL",
    };
    chai
      .request(app)
      .put(`/api/blogs/comment/${blogID}`)
      .set({ Authorization: `Bearer ${token}` })
      .send(comment)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.haveOwnProperty("Blog");
        expect(res.body.Blog).to.haveOwnProperty("_id");
        expect(res.body.Blog).to.haveOwnProperty("Title");
        expect(res.body.Blog).to.haveOwnProperty("Content");
        expect(res.body.Blog).to.haveOwnProperty("Comments").be.a("array");
        done(err);
      });
  });

  it("should return a deleted blog", (done) => {
    chai
      .request(app)
      .delete(`/api/blogs/${blogID}`)
      .set({ Authorization: `Bearer ${token}` })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.haveOwnProperty("Blog");
        done(err);
      });
  });
});
