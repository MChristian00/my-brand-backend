"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _UserControllers = _interopRequireDefault(require("../Controllers/UserControllers"));

var _User = _interopRequireDefault(require("../Middlewares/Validation/User"));

var _CheckAuthToken = require("../Middlewares/CheckAuthToken");

var _checkAdmin = require("../Middlewares/checkAdmin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
var registerFormValidation = _User["default"].registerFormValidation,
    loginFormValidation = _User["default"].loginFormValidation;
var register = _UserControllers["default"].register,
    login = _UserControllers["default"].login,
    updateProfile = _UserControllers["default"].updateProfile,
    logout = _UserControllers["default"].logout;
router.post("/register", registerFormValidation, register);
router.post("/signin", loginFormValidation, login);
router.put("/edit/:id", [_CheckAuthToken.checkAuthToken, _checkAdmin.checkAdmin], updateProfile);
router.get("/logout", _CheckAuthToken.checkAuthToken, logout);
var _default = router;
exports["default"] = _default;