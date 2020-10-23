import { Router } from "express";
import BlogControllers from "../Controllers/BlogControllers";
import { checkAdmin } from "../Middlewares/CheckAdmin";
import { checkAuthToken } from "../Middlewares/CheckAuthToken";
import BlogValidation from "../Middlewares/Validation/Blog";

const router = Router();
const { blogAddFormValidation } = BlogValidation;
const {
  addBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
  commentBlog,
  deleteBlog,
} = BlogControllers;

router.post(
  "/add",
  blogAddFormValidation,
  [checkAuthToken, checkAdmin],
  addBlog
);

router.get("/", getAllBlogs);

router.get("/:id", getBlog);

router.put("/:id", [checkAuthToken, checkAdmin], updateBlog);

router.put("/comment/:id", checkAuthToken, commentBlog);

router.delete("/:id", [checkAuthToken, checkAdmin], deleteBlog);

export default router;
