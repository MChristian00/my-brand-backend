"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkAdmin = void 0;

var checkAdmin = function checkAdmin(req, res, next) {
  var userData = req.userData;

  if (userData) {
    if (userData.Role === "admin") return next();
    return res.status(403).json({
      Message: "Unauthorized. Only an admin can perfom this operation"
    });
  }

  return res.status(403).json({
    Message: "Unauthorized. Log in first"
  });
};

exports.checkAdmin = checkAdmin;