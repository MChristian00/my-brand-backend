import { Router } from "express";
import SubcValidation from "../Middlewares/Validation/Subscription";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({});
});

router.post("/add", (req, res) => {
  res.status(200).json({});
});

export default router;
