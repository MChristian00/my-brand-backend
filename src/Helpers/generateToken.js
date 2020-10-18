import jwt from "jsonwebtoken";

console.log(process.env.JWT_KEY);

export const generateToken = (req, res, next) => {
  let token = jwt.sign(req.body, "SECRET_KEY");
  res.status(200).json({
    Token: token,
  });
  next();
};
