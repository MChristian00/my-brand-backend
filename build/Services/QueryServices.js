"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryServices = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Query = _interopRequireDefault(require("../Database/Models/Query"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var QueryServices = /*#__PURE__*/function () {
  function QueryServices() {
    _classCallCheck(this, QueryServices);
  }

  _createClass(QueryServices, null, [{
    key: "getAllQueries",
    value: function () {
      var _getAllQueries = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _Query["default"].find({});

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                throw error;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      function getAllQueries() {
        return _getAllQueries.apply(this, arguments);
      }

      return getAllQueries;
    }()
  }, {
    key: "addQuery",
    value: function () {
      var _addQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(QueryOwner, Email, QueryContent) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _Query["default"].create({
                  _id: _mongoose["default"].Types.ObjectId(),
                  QueryOwner: QueryOwner,
                  Email: Email,
                  QueryContent: QueryContent
                });

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                throw error;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));

      function addQuery(_x, _x2, _x3) {
        return _addQuery.apply(this, arguments);
      }

      return addQuery;
    }()
  }, {
    key: "getQuery",
    value: function () {
      var _getQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _Query["default"].findById({
                  _id: id
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                throw error;

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 6]]);
      }));

      function getQuery(_x4) {
        return _getQuery.apply(this, arguments);
      }

      return getQuery;
    }()
  }, {
    key: "deleteQuery",
    value: function () {
      var _deleteQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _Query["default"].findByIdAndDelete({
                  _id: id
                });

              case 3:
                return _context4.abrupt("return", _context4.sent);

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                throw error;

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 6]]);
      }));

      function deleteQuery(_x5) {
        return _deleteQuery.apply(this, arguments);
      }

      return deleteQuery;
    }()
  }]);

  return QueryServices;
}();

exports.QueryServices = QueryServices;