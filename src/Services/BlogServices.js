import mongoose from "mongoose";
import Blog from "../Database/Models/Blog";

export default class BlogServices {
  static async getAllBlogs() {
    try {
      let Blogs = await Blog.find({});
      return {
        Status: 200,
        Blogs,
      };
    } catch (err) {
      return {
        statusCode: 500,
        Error: err,
      };
    }
  }

  static async addBlog(Title, Content) {
    try {
      let blog = await Blog.create({
        _id: mongoose.Types.ObjectId(),
        Title,
        Content,
        Comments: [],
      });
      return {
        Status: 200,
        Blog: blog,
      };
    } catch (err) {
      return {
        statusCode: 500,
        Error: err,
      };
    }
  }
  static async getABlog(id) {
    try {
      let blog = await Blog.findById({ _id: id });
      return {
        Status: 200,
        Blog: blog,
      };
    } catch (err) {
      return {
        statusCode: 500,
        Error: err,
      };
    }
  }
  static async updateBlog(id, Title, Content) {
    try {
      let blog = await Blog.findByIdAndUpdate(
        { _id: id },
        {
          Title,
          Content,
        }
      );
      return {
        Status: 200,
        Blog: blog,
      };
    } catch (err) {
      return {
        statusCode: 500,
        Error: err,
      };
    }
  }
  static async commentBlog(id, Owner, Content) {
    try {
      let blog = await Blog.findByIdAndUpdate(
        { _id: id },
        {
          $push: {
            Comments: {
              Owner,
              Content,
              createdAt: new Date(),
            },
          },
        }
      );
      return {
        Status: 200,
        Blog: blog,
      };
    } catch (err) {
      return {
        statusCode: 500,
        Error: err,
      };
    }
  }
  static async deleteBlog(id) {
    try {
      let blog = await Blog.findByIdAndDelete({ _id: id });
      console.log("delete ", delBlog);
      return {
        Status: 200,
        Blog: blog,
      };
    } catch (err) {
      return {
        statusCode: 500,
        Error: err,
      };
    }
  }
}
