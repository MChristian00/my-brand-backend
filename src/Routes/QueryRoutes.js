import { Router } from "express";
import Validation from "../Middlewares/Validation";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({});
});

router.get("/:id", (req, res) => {
  res.status(200).json({});
});

router.post("/add", Validation.queryFormValidation, (req, res) => {
  res.status(200).json({});
});

export default router;
