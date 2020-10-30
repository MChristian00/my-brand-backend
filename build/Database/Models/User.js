"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mongoose = require("mongoose");

var User = mongoose.model("User", mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },
  Firstname: {
    type: String,
    trim: true,
    required: true
  },
  Lastname: {
    type: String,
    trim: true,
    required: true
  },
  Role: {
    type: String,
    trim: true,
    "default": "user"
  },
  Email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  Password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
}));
var _default = User;
exports["default"] = _default;