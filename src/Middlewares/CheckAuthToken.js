import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const checkAuthToken = (req, res, next) => {
  let { authorization } = req.headers;
  let token = authorization ? authorization.split(" ")[1] : null;

  if (token === null) {
    return res.status(401).json({
      Message: "Unauthorized. First log in",
    });
  }
  if (authorization.split(" ")[0] !== "Bearer") {
    return res.status(400).json({
      Message: "Invalid token",
    });
  }

  try {
    req.userData = jwt.verify(token, process.env.JWT_KEY);
    return next();
  } catch (error) {
    return res.status(400).json({
      Error: error,
    });
  }
};
