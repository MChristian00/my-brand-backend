"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _QueryControllers = _interopRequireDefault(require("../Controllers/QueryControllers"));

var _CheckAdmin = require("../Middlewares/CheckAdmin");

var _CheckAuthToken = require("../Middlewares/CheckAuthToken");

var _Query = _interopRequireDefault(require("../Middlewares/Validation/Query"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
var addQuery = _QueryControllers["default"].addQuery,
    getAllQueries = _QueryControllers["default"].getAllQueries,
    getQuery = _QueryControllers["default"].getQuery,
    deleteQuery = _QueryControllers["default"].deleteQuery;
var queryFormValidation = _Query["default"].queryFormValidation;
router.post("/add", queryFormValidation, addQuery);
router.get("/", _CheckAuthToken.checkAuthToken, _CheckAdmin.checkAdmin, getAllQueries);
router.get("/:id", _CheckAuthToken.checkAuthToken, _CheckAdmin.checkAdmin, getQuery);
router["delete"]("/:id", _CheckAuthToken.checkAuthToken, _CheckAdmin.checkAdmin, deleteQuery);
var _default = router;
exports["default"] = _default;