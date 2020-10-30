"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var generateToken = function generateToken(credentials) {
  var token = _jsonwebtoken["default"].sign(credentials, process.env.JWT_KEY);

  return token;
};

exports.generateToken = generateToken;