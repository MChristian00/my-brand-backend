import { Router } from "express";
import QueryValidation from "../Middlewares/Validation/Query";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({});
});

router.get("/:id", (req, res) => {
  res.status(200).json({});
});

router.post("/add", QueryValidation.queryFormValidation, (req, res) => {
  res.status(200).json({});
});

export default router;
