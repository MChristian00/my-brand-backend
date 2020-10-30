"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Blog = _interopRequireDefault(require("../Database/Models/Blog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BlogServices = /*#__PURE__*/function () {
  function BlogServices() {
    _classCallCheck(this, BlogServices);
  }

  _createClass(BlogServices, null, [{
    key: "getAllBlogs",
    value: function () {
      var _getAllBlogs = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _Blog["default"].find({}).sort({
                  createdAt: -1
                });

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      function getAllBlogs() {
        return _getAllBlogs.apply(this, arguments);
      }

      return getAllBlogs;
    }()
  }, {
    key: "addBlog",
    value: function () {
      var _addBlog = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(Title, Content, Picture) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _Blog["default"].create({
                  _id: _mongoose["default"].Types.ObjectId(),
                  Title: Title,
                  Content: Content,
                  Picture: Picture,
                  Comments: []
                });

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));

      function addBlog(_x, _x2, _x3) {
        return _addBlog.apply(this, arguments);
      }

      return addBlog;
    }()
  }, {
    key: "getABlog",
    value: function () {
      var _getABlog = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _Blog["default"].findById({
                  _id: id
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 6]]);
      }));

      function getABlog(_x4) {
        return _getABlog.apply(this, arguments);
      }

      return getABlog;
    }()
  }, {
    key: "updateBlog",
    value: function () {
      var _updateBlog = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id, Title, Content) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _Blog["default"].findByIdAndUpdate({
                  _id: id
                }, {
                  Title: Title,
                  Content: Content
                });

              case 3:
                return _context4.abrupt("return", _context4.sent);

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                throw _context4.t0;

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 6]]);
      }));

      function updateBlog(_x5, _x6, _x7) {
        return _updateBlog.apply(this, arguments);
      }

      return updateBlog;
    }()
  }, {
    key: "commentBlog",
    value: function () {
      var _commentBlog = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id, Owner, Content) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _Blog["default"].findByIdAndUpdate({
                  _id: id
                }, {
                  $push: {
                    Comments: {
                      Owner: Owner,
                      Content: Content,
                      createdAt: new Date()
                    }
                  }
                });

              case 3:
                return _context5.abrupt("return", _context5.sent);

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);
                throw _context5.t0;

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 6]]);
      }));

      function commentBlog(_x8, _x9, _x10) {
        return _commentBlog.apply(this, arguments);
      }

      return commentBlog;
    }()
  }, {
    key: "deleteBlog",
    value: function () {
      var _deleteBlog = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _Blog["default"].findByIdAndDelete({
                  _id: id
                });

              case 3:
                return _context6.abrupt("return", _context6.sent);

              case 6:
                _context6.prev = 6;
                _context6.t0 = _context6["catch"](0);
                throw _context6.t0;

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 6]]);
      }));

      function deleteBlog(_x11) {
        return _deleteBlog.apply(this, arguments);
      }

      return deleteBlog;
    }()
  }]);

  return BlogServices;
}();

exports["default"] = BlogServices;