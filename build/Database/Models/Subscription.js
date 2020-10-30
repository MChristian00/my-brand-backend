"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mongoose = require("mongoose");

var Subscription = mongoose.model("Subscription", mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },
  Name: {
    type: String,
    trim: true,
    required: true
  },
  Email: {
    type: String,
    trim: true,
    required: true
  }
}, {
  timestamps: true
}));
var _default = Subscription;
exports["default"] = _default;