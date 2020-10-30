"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _BlogRoutes = _interopRequireDefault(require("./Routes/BlogRoutes"));

var _UserRoutes = _interopRequireDefault(require("./Routes/UserRoutes"));

var _QueryRoutes = _interopRequireDefault(require("./Routes/QueryRoutes"));

var _SubscriptionRoutes = _interopRequireDefault(require("./Routes/SubscriptionRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var DB = _mongoose["default"].connection;

_mongoose["default"].connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}); //Listen to DB


DB.once("open", function () {
  console.log("Connection to MONGODB established...");
});
DB.on("error", function (err) {
  console.log(err);
});
var app = (0, _express["default"])();
/**
 * ADDING CORS HANDLERS
 */

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, content-type, Accept, Authorization"); //   res.header("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,GET,DELETE");
    return res.status(200).json({});
  }

  next();
}); // Body parsing middleware

app.use((0, _bodyParser.urlencoded)({
  extended: false
}));
app.use((0, _bodyParser.json)()); // Routes

app.use("/api/queries", _QueryRoutes["default"]);
app.use("/api/blogs", _BlogRoutes["default"]);
app.use("/api/auth", _UserRoutes["default"]);
app.use("/api/subscription", _SubscriptionRoutes["default"]); // For an unavailable route

app.use(function (req, res, next) {
  res.status(404).json({
    Message: "URL UNAVAILABLE"
  });
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server started on PORT ".concat(PORT));
});
var _default = app;
exports["default"] = _default;