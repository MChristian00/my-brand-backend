import { Router } from "express";
import { generateToken } from "../Helpers/generateToken";
import Validation from "../Middlewares/Validation";

const router = Router();

router.post(
  "/signin",
  Validation.loginFormValidation,
  generateToken,
  (req, res) => {}
);

router.post("/signup", Validation.registerFormValidation, (req, res) => {});

export default router;
