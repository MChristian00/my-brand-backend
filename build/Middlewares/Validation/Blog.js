"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BlogValidation = /*#__PURE__*/function () {
  function BlogValidation() {
    _classCallCheck(this, BlogValidation);
  }

  _createClass(BlogValidation, null, [{
    key: "blogAddFormValidation",
    value: function () {
      var _blogAddFormValidation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var SCHEMA, _SCHEMA$validate, error;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                SCHEMA = _joi["default"].object({
                  Title: _joi["default"].string().min(3).required(),
                  Content: _joi["default"].string().min(120).required(),
                  Picture: _joi["default"].string().uri()
                });
                _context.prev = 1;
                _SCHEMA$validate = SCHEMA.validate(req.body), error = _SCHEMA$validate.error;

                if (!error) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", res.status(400).json({
                  Error: error.details[0].message
                }));

              case 7:
                next();

              case 8:
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 10]]);
      }));

      function blogAddFormValidation(_x, _x2, _x3) {
        return _blogAddFormValidation.apply(this, arguments);
      }

      return blogAddFormValidation;
    }()
  }, {
    key: "blogUpdateFormValidation",
    value: function () {
      var _blogUpdateFormValidation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
        var SCHEMA, _SCHEMA$validate2, error;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                SCHEMA = _joi["default"].object({
                  Title: _joi["default"].string(),
                  Content: _joi["default"].string(),
                  Picture: _joi["default"].string().uri()
                });
                _context2.prev = 1;
                _SCHEMA$validate2 = SCHEMA.validate(req.body), error = _SCHEMA$validate2.error;

                if (!error) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", res.status(400).json({
                  Error: error.details[0].message
                }));

              case 7:
                next();

              case 8:
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](1);
                console.log(_context2.t0);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 10]]);
      }));

      function blogUpdateFormValidation(_x4, _x5, _x6) {
        return _blogUpdateFormValidation.apply(this, arguments);
      }

      return blogUpdateFormValidation;
    }()
  }]);

  return BlogValidation;
}();

exports["default"] = BlogValidation;