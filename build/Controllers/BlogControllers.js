"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BlogServices = _interopRequireDefault(require("../Services/BlogServices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BlogControllers = /*#__PURE__*/function () {
  function BlogControllers() {
    _classCallCheck(this, BlogControllers);
  }

  _createClass(BlogControllers, null, [{
    key: "getAllBlogs",
    value: function () {
      var _getAllBlogs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _BlogServices["default"].getAllBlogs().then(function (Blogs) {
                  if (Blogs.length) return res.status(200).json({
                    Message: "".concat(Blogs.length, " Blogs retrieved"),
                    Blogs: Blogs
                  });
                  return res.status(404).json({
                    Message: "No Blogs added yet"
                  });
                })["catch"](function (error) {
                  res.status(500).json({
                    Error: error
                  });
                });

              case 3:
                _context.next = 8;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                res.status(400).send(_context.t0);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 5]]);
      }));

      function getAllBlogs(_x, _x2) {
        return _getAllBlogs.apply(this, arguments);
      }

      return getAllBlogs;
    }()
  }, {
    key: "getBlog",
    value: function () {
      var _getBlog = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var id;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = req.params.id;
                _context2.prev = 1;
                _context2.next = 4;
                return _BlogServices["default"].getABlog(id).then(function (Blog) {
                  if (Blog) return res.status(200).json({
                    Message: "Blog retrieved",
                    Blog: Blog
                  });
                  return res.status(404).json({
                    Error: "Resource not found"
                  });
                })["catch"](function (error) {
                  res.status(500).json({
                    Error: error
                  });
                });

              case 4:
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](1);
                res.status(400).send(_context2.t0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 6]]);
      }));

      function getBlog(_x3, _x4) {
        return _getBlog.apply(this, arguments);
      }

      return getBlog;
    }()
  }, {
    key: "addBlog",
    value: function () {
      var _addBlog = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var _req$body, Title, Content, Picture;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _req$body = req.body, Title = _req$body.Title, Content = _req$body.Content, Picture = _req$body.Picture;
                _context3.prev = 1;
                _context3.next = 4;
                return _BlogServices["default"].addBlog(Title, Content, Picture).then(function (Blog) {
                  return res.status(201).json({
                    Message: "Blog created",
                    Blog: Blog
                  });
                })["catch"](function (error) {
                  res.status(500).json({
                    Error: error
                  });
                });

              case 4:
                _context3.next = 9;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](1);
                res.status(400).send(_context3.t0);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 6]]);
      }));

      function addBlog(_x5, _x6) {
        return _addBlog.apply(this, arguments);
      }

      return addBlog;
    }()
  }, {
    key: "updateBlog",
    value: function () {
      var _updateBlog = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var id, _req$body2, Title, Content;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;
                _req$body2 = req.body, Title = _req$body2.Title, Content = _req$body2.Content;
                _context4.prev = 2;
                _context4.next = 5;
                return _BlogServices["default"].updateBlog(id, Title, Content).then(function (Blog) {
                  if (Blog) return res.status(201).json({
                    Message: "Blog successfully updated",
                    Blog: Blog
                  });
                  return res.status(404).json({
                    Error: "Resource not found"
                  });
                })["catch"](function (error) {
                  res.status(500).json({
                    Error: error
                  });
                });

              case 5:
                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](2);
                res.status(400).send(_context4.t0);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[2, 7]]);
      }));

      function updateBlog(_x7, _x8) {
        return _updateBlog.apply(this, arguments);
      }

      return updateBlog;
    }()
  }, {
    key: "commentBlog",
    value: function () {
      var _commentBlog = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var id, Content, _req$userData, Firstname, Lastname, Owner;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;
                Content = req.body.Content;
                _req$userData = req.userData, Firstname = _req$userData.Firstname, Lastname = _req$userData.Lastname;
                Owner = "".concat(Firstname, " ").concat(Lastname);
                _context5.prev = 4;
                _context5.next = 7;
                return _BlogServices["default"].commentBlog(id, Owner, Content).then(function (Blog) {
                  if (Blog) return res.status(201).json({
                    Message: "Comment successfully added",
                    Blog: Blog
                  });
                  return res.status(404).json({
                    Error: "Resource not found"
                  });
                })["catch"](function (error) {
                  res.status(500).json({
                    Error: error
                  });
                });

              case 7:
                _context5.next = 12;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](4);
                res.status(400).send(_context5.t0);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[4, 9]]);
      }));

      function commentBlog(_x9, _x10) {
        return _commentBlog.apply(this, arguments);
      }

      return commentBlog;
    }()
  }, {
    key: "deleteBlog",
    value: function () {
      var _deleteBlog = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
        var id;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                id = req.params.id;
                _context6.prev = 1;
                _context6.next = 4;
                return _BlogServices["default"].deleteBlog(id).then(function (Blog) {
                  if (Blog) return res.status(200).json({
                    Message: "Blog deleted",
                    Blog: Blog
                  });
                  return res.status(404).json({
                    Error: "Resource not found"
                  });
                })["catch"](function (error) {
                  res.status(500).json({
                    Error: error
                  });
                });

              case 4:
                _context6.next = 9;
                break;

              case 6:
                _context6.prev = 6;
                _context6.t0 = _context6["catch"](1);
                res.status(400).send(_context6.t0);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[1, 6]]);
      }));

      function deleteBlog(_x11, _x12) {
        return _deleteBlog.apply(this, arguments);
      }

      return deleteBlog;
    }()
  }]);

  return BlogControllers;
}();

exports["default"] = BlogControllers;