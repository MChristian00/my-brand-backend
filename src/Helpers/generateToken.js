import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateToken = (credentials) => {
  let token = jwt.sign(credentials, process.env.JWT_KEY);
  return token;
};
