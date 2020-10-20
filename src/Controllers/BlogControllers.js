import mongoose from "mongoose";
import Blog from "../Database/Models/Blog";

export default class BlogControllers {
  static async getAllBlogs(req, res) {
    try {
      await Blog.find({}, (err, blogs) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({
          Message: `${blogs.length} Blogs retrieved`,
          Blogs: blogs,
        });
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async getBlog(req, res) {
    let { id } = req.params;
    try {
      await Blog.findById({ _id: id }, (err, blog) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({
          Message: "Blog retrieved",
          Blog: blog,
        });
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async addBlog(req, res) {
    let { Title, Content } = req.body;
    try {
      await Blog.create(
        {
          _id: mongoose.Types.ObjectId(),
          Title,
          Content,
          Comments: [],
        },
        (err, blog) => {
          if (err) return res.status(500).send(err);
          res.status(201).json({
            Message: "Blog created",
            Blog: blog,
          });
        }
      );
    } catch (error) {
      res.status(400).send(error);
    }
  }
  static async updateBlog(req, res) {
    let { id } = req.params;
    let { Title, Content } = req.body;
    try {
      await Blog.findByIdAndUpdate(
        { _id: id },
        {
          Title,
          Content,
        },
        (err, doc) => {
          if (err) return res.status(500).send(err);
          res.status(201).json({
            Message: "Blog successfully updated",
            Blog: doc,
          });
        }
      );
    } catch (error) {
      res.status(400).send(error);
    }
  }
  static async commentBlog(req, res) {
    let { id } = req.params;
    let { Owner, Content } = req.body;
    try {
      await Blog.findByIdAndUpdate(
        { _id: id },
        {
          $push: {
            Comments: {
              Owner,
              Content,
              createdAt: new Date(),
            },
          },
        },
        (err, doc) => {
          if (err) return res.status(500).send(err);
          res.status(201).json({
            Message: "Comment successfully added",
            Blog: doc,
          });
        }
      );
    } catch (error) {
      res.status(400).send(error);
    }
  }
  static async deleteBlog(req, res) {
    let { id } = req.params;
    try {
      await Blog.findByIdAndDelete({ _id: id }, (err, blog) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({
          Message: "Blog deleted",
          Blog: blog,
        });
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
