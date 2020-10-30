"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _BlogControllers = _interopRequireDefault(require("../Controllers/BlogControllers"));

var _CheckAdmin = require("../Middlewares/CheckAdmin");

var _CheckAuthToken = require("../Middlewares/CheckAuthToken");

var _Blog = _interopRequireDefault(require("../Middlewares/Validation/Blog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
var blogAddFormValidation = _Blog["default"].blogAddFormValidation;
var addBlog = _BlogControllers["default"].addBlog,
    getAllBlogs = _BlogControllers["default"].getAllBlogs,
    getBlog = _BlogControllers["default"].getBlog,
    updateBlog = _BlogControllers["default"].updateBlog,
    commentBlog = _BlogControllers["default"].commentBlog,
    deleteBlog = _BlogControllers["default"].deleteBlog;
router.post("/add", blogAddFormValidation, [_CheckAuthToken.checkAuthToken, _CheckAdmin.checkAdmin], addBlog);
router.get("/", getAllBlogs);
router.get("/:id", getBlog);
router.put("/:id", [_CheckAuthToken.checkAuthToken, _CheckAdmin.checkAdmin], updateBlog);
router.put("/comment/:id", _CheckAuthToken.checkAuthToken, commentBlog);
router["delete"]("/:id", [_CheckAuthToken.checkAuthToken, _CheckAdmin.checkAdmin], deleteBlog);
var _default = router;
exports["default"] = _default;