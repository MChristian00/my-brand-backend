import express from "express";
import { urlencoded, json } from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import BlogRoutes from "./Routes/BlogRoutes";
import UserRoutes from "./Routes/UserRoutes";
import QueryRoutes from "./Routes/QueryRoutes";
import SubscriptionRoutes from "./Routes/SubscriptionRoutes";

dotenv.config();

const DB = mongoose.connection;

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//Listen to DB

DB.once("open", () => {
  console.log("Connection to MONGODB established...");
});

DB.on("error", (err) => {
  console.log(err);
});

const app = express();

/**
 * ADDING CORS HANDLERS
 */

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, content-type, Accept, Authorization"
  );
  //   res.header("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,GET,DELETE");
    return res.status(200).json({});
  }
  next();
});

// Body parsing middleware
app.use(urlencoded({ extended: false }));
app.use(json());

// Routes
app.use("/api/queries", QueryRoutes);
app.use("/api/blogs", BlogRoutes);
app.use("/api/auth", UserRoutes);
app.use("/api/subscription", SubscriptionRoutes);

// For an unavailable route
app.use((req, res, next) => {
  res.status(404).json({
    Message: "URL UNAVAILABLE",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});

export default app;
