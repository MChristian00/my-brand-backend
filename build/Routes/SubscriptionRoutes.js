"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _SubscriptionControllers = _interopRequireDefault(require("../Controllers/SubscriptionControllers"));

var _Subscription = _interopRequireDefault(require("../Middlewares/Validation/Subscription"));

var _CheckAuthToken = require("../Middlewares/CheckAuthToken");

var _CheckAdmin = require("../Middlewares/CheckAdmin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
var addSubscr = _SubscriptionControllers["default"].addSubscr,
    getSubscr = _SubscriptionControllers["default"].getSubscr,
    deleteSubscr = _SubscriptionControllers["default"].deleteSubscr;
var subscrFormValidation = _Subscription["default"].subscrFormValidation;
router.post("/add", subscrFormValidation, addSubscr);
router.get("/", [_CheckAuthToken.checkAuthToken, _CheckAdmin.checkAdmin], getSubscr);
router["delete"]("/:id", deleteSubscr);
var _default = router;
exports["default"] = _default;