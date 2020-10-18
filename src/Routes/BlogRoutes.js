import { Router } from "express";
import BlogValidation from "../Middlewares/Validation/Blog";

const router = Router();

router.post("/add", BlogValidation.blogFormValidation, (req, res) => {
  res.status(200).json({});
});

router.get("/", (req, res) => {
  res.status(200).json({});
});

router.get("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

export default router;
