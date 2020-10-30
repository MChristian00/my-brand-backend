"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _generateToken = require("../Helpers/generateToken");

var _UserServices = _interopRequireDefault(require("../Services/UserServices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var registerUser = _UserServices["default"].registerUser,
    loginUser = _UserServices["default"].loginUser,
    _updateProfile = _UserServices["default"].updateProfile;

var UserControllers = /*#__PURE__*/function () {
  function UserControllers() {
    _classCallCheck(this, UserControllers);
  }

  _createClass(UserControllers, null, [{
    key: "register",
    value: function () {
      var _register = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var _req$body, Firstname, Lastname, Email, Password, hash;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, Firstname = _req$body.Firstname, Lastname = _req$body.Lastname, Email = _req$body.Email, Password = _req$body.Password;
                _context.prev = 1;
                hash = _bcrypt["default"].hashSync(Password, 10);
                _context.next = 5;
                return registerUser(Firstname, Lastname, Email, hash).then(function (data) {
                  var token = (0, _generateToken.generateToken)({
                    _id: data._id,
                    Firstname: Firstname,
                    Lastname: Lastname,
                    Email: Email
                  });
                  res.status(201).json({
                    Message: "User added",
                    Token: token
                  });
                })["catch"](function (error) {
                  res.status(500).json({
                    Error: error
                  });
                });

              case 5:
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                res.status(400).send(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 7]]);
      }));

      function register(_x, _x2) {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var _req$body2, Email, Password;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _req$body2 = req.body, Email = _req$body2.Email, Password = _req$body2.Password;
                _context2.prev = 1;
                _context2.next = 4;
                return loginUser(Email).then(function (user) {
                  if (user) {
                    var _id = user._id,
                        _Email = user.Email,
                        Firstname = user.Firstname,
                        Lastname = user.Lastname,
                        Role = user.Role;
                    var token = (0, _generateToken.generateToken)({
                      _id: _id,
                      Email: _Email,
                      Firstname: Firstname,
                      Lastname: Lastname,
                      Role: Role
                    });
                    var isValid = user ? _bcrypt["default"].compareSync(Password, user.Password) : null;
                    if (isValid) return res.json({
                      Message: "User successfully logged in",
                      Token: token
                    });
                  }

                  res.status(404).json({
                    Message: "Wrong credentials"
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

      function login(_x3, _x4) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "updateProfile",
    value: function () {
      var _updateProfile2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var _req$body3, Email, Password, id, hash;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _req$body3 = req.body, Email = _req$body3.Email, Password = _req$body3.Password;
                id = req.params.id;
                _context3.prev = 2;
                hash = _bcrypt["default"].hashSync(Password, 10);
                _context3.next = 6;
                return _updateProfile(id, Email, hash).then(function (user) {
                  res.status(201).json({
                    Message: "User profile updated"
                  });
                })["catch"](function (error) {
                  res.status(500).json({
                    Error: error
                  });
                });

              case 6:
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](2);
                res.status(400).send(_context3.t0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 8]]);
      }));

      function updateProfile(_x5, _x6) {
        return _updateProfile2.apply(this, arguments);
      }

      return updateProfile;
    }()
  }, {
    key: "logout",
    value: function () {
      var _logout = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                req.userData = {};
                res.status(200).json({
                  Message: "Successfully logged out"
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function logout(_x7, _x8) {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
  }]);

  return UserControllers;
}();

exports["default"] = UserControllers;