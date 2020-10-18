import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateToken = (req, res, next) => {
  let token = jwt.sign(req.body, process.env.JWT_KEY);
  res.Token = token;
  next();
};
