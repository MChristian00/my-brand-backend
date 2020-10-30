"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkAuthToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var checkAuthToken = function checkAuthToken(req, res, next) {
  var authorization = req.headers.authorization;
  var token = authorization ? authorization.split(" ")[1] : null;

  if (token === null) {
    return res.status(401).json({
      Message: "Unauthorized. First log in"
    });
  }

  if (authorization.split(" ")[0] !== "Bearer") {
    return res.status(400).json({
      Error: "Invalid token"
    });
  }

  try {
    req.userData = _jsonwebtoken["default"].verify(token, process.env.JWT_KEY);
    return next();
  } catch (error) {
    return res.status(400).json({
      Error: error
    });
  }
};

exports.checkAuthToken = checkAuthToken;