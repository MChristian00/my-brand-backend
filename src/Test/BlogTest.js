import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import Blog from "../Database/Models/Blog";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjkxYjI2MGQyOTVmN2MzMzRkODhhYjkiLCJGaXJzdG5hbWUiOiJhZG1pbiIsIkxhc3RuYW1lIjoiYWRtaW4iLCJFbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsIlJvbGUiOiJhZG1pbiIsImlhdCI6MTYwMzM4MzkwNH0.zlm6wDYtJMJk4bdTYuUGgZzLuZhHqruKKQFbFTo0hlQ";
let blogID = "5f993cf06b4cc18d468e6ffe";

chai.use(chaiHttp);

describe("BLOG ROUTES", () => {
  it("should return array of all blogs", (done) => {
    chai
      .request(app)
      .get("/api/blogs")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.Blogs).to.be.a("array");
        // expect(res.body.Blogs).to.have.lengthOf(0);
        done(err);
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
        expect(res).to.have.status(201);
        expect(res.body).haveOwnProperty("Blog");
        expect(res.body.Blog).to.haveOwnProperty("_id");
        expect(res.body.Blog).to.haveOwnProperty("Title");
        expect(res.body.Blog).to.haveOwnProperty("Content");
        done(err);
      });
  });

  it("should get a single blog", (done) => {
    chai
      .request(app)
      .get("/api/blogs/:id")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.contain("Blog");
        done(err);
      });
  });

  it("should return an edited blog", (done) => {
    chai
      .request(app)
      .put("/api/blogs/:id")
      .set({ Authorization: `Bearer ${token}` })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.contain("Blog");
        expect(res.body.Blog).to.be.a("object");
        done(err);
      });
  });

  it("should return blog with a comment", (done) => {
    chai
      .request(app)
      .put("/api/blogs/comment/:id")
      .set({ Authorization: `Bearer ${token}` })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.contain("Blog");
        expect(res.body.Blog.Comments).to.be.a("array");
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
