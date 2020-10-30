"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SubscriptionServices = _interopRequireDefault(require("../Services/SubscriptionServices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SubscriptionControllers = /*#__PURE__*/function () {
  function SubscriptionControllers() {
    _classCallCheck(this, SubscriptionControllers);
  }

  _createClass(SubscriptionControllers, null, [{
    key: "addSubscr",
    value: function () {
      var _addSubscr = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var _req$body, Name, Email;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, Name = _req$body.Name, Email = _req$body.Email;
                _context.prev = 1;
                _context.next = 4;
                return _SubscriptionServices["default"].addSubscr(Name, Email).then(function (data) {
                  res.status(200).json({
                    Message: "Subscription successfull",
                    Subscription: data
                  });
                })["catch"](function (error) {
                  res.status(500).json({
                    Error: error
                  });
                });

              case 4:
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);
                res.status(400).json({
                  Error: _context.t0
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 6]]);
      }));

      function addSubscr(_x, _x2) {
        return _addSubscr.apply(this, arguments);
      }

      return addSubscr;
    }()
  }, {
    key: "getSubscr",
    value: function () {
      var _getSubscr = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _SubscriptionServices["default"].getSubscr().then(function (data) {
                  if (data.length) return res.status(200).json({
                    Message: "".concat(data.length, " Subscription retrieved"),
                    Subscription: data
                  });
                  return res.status(200).json({
                    Message: "No subscriptions yet"
                  });
                })["catch"](function (error) {
                  res.status(500).json({
                    Error: error
                  });
                });

              case 3:
                _context2.next = 8;
                break;

              case 5:
                _context2.prev = 5;
                _context2.t0 = _context2["catch"](0);
                res.status(400).json({
                  Error: _context2.t0
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 5]]);
      }));

      function getSubscr(_x3, _x4) {
        return _getSubscr.apply(this, arguments);
      }

      return getSubscr;
    }()
  }, {
    key: "deleteSubscr",
    value: function () {
      var _deleteSubscr = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var id;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = req.params.id;
                _context3.prev = 1;
                _context3.next = 4;
                return _SubscriptionServices["default"].deleteSubscr(id).then(function (data) {
                  if (data) return res.status(200).json({
                    Message: "Successfully unsubscribed",
                    Subscription: data
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
                _context3.next = 9;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](1);
                res.status(400).json({
                  Error: _context3.t0
                });

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 6]]);
      }));

      function deleteSubscr(_x5, _x6) {
        return _deleteSubscr.apply(this, arguments);
      }

      return deleteSubscr;
    }()
  }]);

  return SubscriptionControllers;
}();

exports["default"] = SubscriptionControllers;