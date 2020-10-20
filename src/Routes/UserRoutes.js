import { Router } from "express";
import UserControllers from "../Controllers/UserControllers";
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
  UserControllers.login
);

router.put("/edit/:id", UserControllers.updateProfile);

router.get("/logout", UserControllers.logout);

export default router;
