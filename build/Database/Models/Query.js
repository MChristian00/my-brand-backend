"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mongoose = require("mongoose");

var Query = mongoose.model("Query", mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },
  QueryOwner: {
    type: String,
    trim: true,
    required: true
  },
  Email: {
    type: String,
    trim: true,
    required: true
  },
  QueryContent: {
    type: String,
    trim: true,
    required: true
  }
}, {
  timestamps: true
}));
var _default = Query;
exports["default"] = _default;