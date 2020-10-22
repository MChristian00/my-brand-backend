import { Router } from "express";
import BlogControllers from "../Controllers/BlogControllers";
import { checkAdmin } from "../Middlewares/CheckAdmin";
import { checkAuthToken } from "../Middlewares/CheckAuthToken";
import BlogValidation from "../Middlewares/Validation/Blog";

const router = Router();
const { blogFormValidation } = BlogValidation;
const {
  addBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
  commentBlog,
  deleteBlog,
} = BlogControllers;

router.post("/add", blogFormValidation, [checkAuthToken], addBlog);

router.get("/", getAllBlogs);

router.get("/:id", getBlog);

router.put("/:id", updateBlog);

router.put("/comment/:id", checkAuthToken, commentBlog);

router.delete("/:id", deleteBlog);

export default router;
