import { Router } from "express";
import UserControllers from "../Controllers/UserControllers";
import { generateToken } from "../Helpers/generateToken";
import UserValidation from "../Middlewares/Validation/User";

const router = Router();

router.post(
  "/register",
  UserValidation.registerFormValidation,
  UserControllers.register
);

router.post(
  "/signin",
  UserValidation.loginFormValidation,
  generateToken,
  UserControllers.login
);

router.get("/logout", UserControllers.logout);

export default router;
