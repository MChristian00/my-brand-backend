"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mongoose = require("mongoose");

var Blog = mongoose.model("Blog", mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },
  Title: {
    type: String,
    trim: true,
    required: true
  },
  Content: {
    type: String,
    trim: true,
    required: true
  },
  Picture: {
    type: String
  },
  Comments: {
    type: Array
  }
}, {
  timestamps: true
}));
var _default = Blog;
exports["default"] = _default;