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

// Body parsing middleware
app.use(urlencoded({ extended: false }));
app.use(json());

// Routes
app.use("/api/queries", QueryRoutes);
app.use("/api/blogs", BlogRoutes);
app.use("/api/auth", UserRoutes);
app.use("/api/subscribe", SubscriptionRoutes);

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
