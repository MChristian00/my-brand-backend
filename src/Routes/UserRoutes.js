import { Router } from "express";
import UserControllers from "../Controllers/UserControllers";
import UserValidation from "../Middlewares/Validation/User";
import { checkAuthToken } from "../Middlewares/CheckAuthToken";
import { checkAdmin } from "../Middlewares/checkAdmin";

const router = Router();
const { registerFormValidation, loginFormValidation } = UserValidation;
const { register, login, updateProfile, logout } = UserControllers;

router.post("/register", registerFormValidation, register);

router.post("/signin", loginFormValidation, login);

router.put("/edit/:id", [checkAuthToken, checkAdmin], updateProfile);

router.get("/logout", checkAuthToken, logout);

export default router;
