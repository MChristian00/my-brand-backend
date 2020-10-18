import express from "express";
import { urlencoded, json } from "body-parser";
import BlogRoutes from "./Routes/BlogRoutes";
import UserRoutes from "./Routes/UserRoutes";
import QueryRoutes from "./Routes/QueryRoutes";

require("dotenv").config;

const app = express();

// Body parsing middleware
app.use(urlencoded({ extended: false }));
app.use(json());

app.use("/api/queries", QueryRoutes);
app.use("/api/blogs", BlogRoutes);
app.use("/api/auth", UserRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
