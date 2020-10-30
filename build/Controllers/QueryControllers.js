"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Query = _interopRequireDefault(require("../Database/Models/Query"));

var _QueryServices = require("../Services/QueryServices");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _getAllQueries = _QueryServices.QueryServices.getAllQueries,
    _getQuery = _QueryServices.QueryServices.getQuery,
    _addQuery = _QueryServices.QueryServices.addQuery,
    _deleteQuery = _QueryServices.QueryServices.deleteQuery;

var QueryControllers = /*#__PURE__*/function () {
  function QueryControllers() {
    _classCallCheck(this, QueryControllers);
  }

  _createClass(QueryControllers, null, [{
    key: "getAllQueries",
    value: function () {
      var _getAllQueries2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _getAllQueries().then(function (Queries) {
                  if (Queries.length) return res.status(200).json({
                    Message: "".concat(Queries.length, " Queries retrieved"),
                    Queries: Queries
                  });
                  return res.status(200).json({
                    Message: "No Queries added yet"
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

      function getAllQueries(_x, _x2) {
        return _getAllQueries2.apply(this, arguments);
      }

      return getAllQueries;
    }()
  }, {
    key: "getQuery",
    value: function () {
      var _getQuery2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var id;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = req.params.id;
                _context2.prev = 1;
                _context2.next = 4;
                return _getQuery(id).then(function (Query) {
                  if (Query) return res.status(200).json({
                    Message: "Query retrieved",
                    Query: Query
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

      function getQuery(_x3, _x4) {
        return _getQuery2.apply(this, arguments);
      }

      return getQuery;
    }()
  }, {
    key: "addQuery",
    value: function () {
      var _addQuery2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var _req$body, QueryOwner, Email, QueryContent;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _req$body = req.body, QueryOwner = _req$body.QueryOwner, Email = _req$body.Email, QueryContent = _req$body.QueryContent;
                _context3.prev = 1;
                _context3.next = 4;
                return _addQuery(QueryOwner, Email, QueryContent).then(function (Query) {
                  return res.status(201).json({
                    Message: "Query sent",
                    Query: Query
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

      function addQuery(_x5, _x6) {
        return _addQuery2.apply(this, arguments);
      }

      return addQuery;
    }()
  }, {
    key: "deleteQuery",
    value: function () {
      var _deleteQuery2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var id;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;
                _context4.prev = 1;
                _context4.next = 4;
                return _deleteQuery(id).then(function (Query) {
                  if (Query) return res.status(200).json({
                    Message: "Query deleted",
                    Query: Query
                  });
                  return res.status(404).json({
                    Error: "Resouece not found"
                  });
                })["catch"](function (error) {
                  res.status(500).json({
                    Error: error
                  });
                });

              case 4:
                _context4.next = 9;
                break;

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](1);
                res.status(400).send(_context4.t0);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 6]]);
      }));

      function deleteQuery(_x7, _x8) {
        return _deleteQuery2.apply(this, arguments);
      }

      return deleteQuery;
    }()
  }]);

  return QueryControllers;
}();

exports["default"] = QueryControllers;