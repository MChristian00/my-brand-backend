"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../app"));

var _Blog = _interopRequireDefault(require("../Database/Models/Blog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjkxYjI2MGQyOTVmN2MzMzRkODhhYjkiLCJGaXJzdG5hbWUiOiJhZG1pbiIsIkxhc3RuYW1lIjoiYWRtaW4iLCJFbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsIlJvbGUiOiJhZG1pbiIsImlhdCI6MTYwMzM4MzkwNH0.zlm6wDYtJMJk4bdTYuUGgZzLuZhHqruKKQFbFTo0hlQ";
var blogID = "5f993cf06b4cc18d468e6ffe";

_chai["default"].use(_chaiHttp["default"]);

describe("BLOG ROUTES", function () {
  it("should return array of all blogs", function (done) {
    _chai["default"].request(_app["default"]).get("/api/blogs").end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(200);
      (0, _chai.expect)(res.body.Blogs).to.be.a("array"); // expect(res.body.Blogs).to.have.lengthOf(0);

      done(err);
    });
  });
  it("should return an added blog", function (done) {
    var newBlog = {
      Title: "BLOG NOVA",
      Content: "Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor."
    };

    _chai["default"].request(_app["default"]).post("/api/blogs/add").set({
      Authorization: "Bearer ".concat(token)
    }).send(newBlog).end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(201);
      (0, _chai.expect)(res.body).haveOwnProperty("Blog");
      (0, _chai.expect)(res.body.Blog).to.haveOwnProperty("_id");
      (0, _chai.expect)(res.body.Blog).to.haveOwnProperty("Title");
      (0, _chai.expect)(res.body.Blog).to.haveOwnProperty("Content");
      done(err);
    });
  });
  it("should get a single blog", function (done) {
    _chai["default"].request(_app["default"]).get("/api/blogs/:id").end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(200);
      (0, _chai.expect)(res.body).to.haveOwnProperty("Blog");
      (0, _chai.expect)(res.body.Blog).to.haveOwnProperty("_id");
      (0, _chai.expect)(res.body.Blog).to.haveOwnProperty("Title");
      (0, _chai.expect)(res.body.Blog).to.haveOwnProperty("Content");
      done(err);
    });
  });
  it("should return an edited blog", function (done) {
    var updatedBlog = {
      Title: "BLOG NOVA(edited)",
      Content: "Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor."
    };

    _chai["default"].request(_app["default"]).put("/api/blogs/".concat(blogID)).set({
      Authorization: "Bearer ".concat(token)
    }).send(updatedBlog).end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(201);
      (0, _chai.expect)(res.body).to.haveOwnProperty("Blog");
      (0, _chai.expect)(res.body.Blog).to.haveOwnProperty("_id");
      (0, _chai.expect)(res.body.Blog).to.haveOwnProperty("Title");
      (0, _chai.expect)(res.body.Blog).to.haveOwnProperty("Content");
      done(err);
    });
  });
  it("should return blog with a comment", function (done) {
    var comment = {
      Content: "Lorem ipsum dolor Lorem ipsum dolorL"
    };

    _chai["default"].request(_app["default"]).put("/api/blogs/comment/".concat(blogID)).set({
      Authorization: "Bearer ".concat(token)
    }).send(comment).end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(201);
      (0, _chai.expect)(res.body).to.contain("Blog");
      done(err);
    });
  });
  it("should return a deleted blog", function (done) {
    _chai["default"].request(_app["default"])["delete"]("/api/blogs/".concat(blogID)).set({
      Authorization: "Bearer ".concat(token)
    }).end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(200);
      (0, _chai.expect)(res.body).to.haveOwnProperty("Blog");
      done(err);
    });
  });
});