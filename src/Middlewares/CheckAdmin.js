export const checkAdmin = (req, res, next) => {
  let { userData } = req;
  if (userData) {
    if (userData.Role === "admin") return next();
    return res.status(403).json({
      Message: "Unauthorized. Only an admin can perfom this operation",
    });
  }
  return res.status(403).json({
    Message: "Unauthorized. Log in first",
  });
};
