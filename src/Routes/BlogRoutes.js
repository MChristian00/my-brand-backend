import { Router } from "express";
import BlogControllers from "../Controllers/BlogControllers";
import BlogValidation from "../Middlewares/Validation/Blog";

const router = Router();

router.post("/add", BlogValidation.blogFormValidation, BlogControllers.addBlog);

router.get("/", BlogControllers.getAllBlogs);

router.get("/:id", BlogControllers.getBlog);

router.put("/:id", BlogControllers.updateBlog);

router.put("/comment/:id", BlogControllers.commentBlog);

router.delete("/:id", BlogControllers.deleteBlog);

export default router;
