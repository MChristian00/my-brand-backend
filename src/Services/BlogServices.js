import mongoose from "mongoose";
import Blog from "../Database/Models/Blog";

export default class BlogServices {
  static async getAllBlogs() {
    try {
      return await Blog.find({}).sort({ createdAt: -1 });
    } catch (err) {
      throw err;
    }
  }

  static async addBlog(Title, Content, Picture) {
    try {
      return await Blog.create({
        _id: mongoose.Types.ObjectId(),
        Title,
        Content,
        Picture,
        Comments: [],
      });
    } catch (err) {
      throw err;
    }
  }
  static async getABlog(id) {
    try {
      return await Blog.findById({ _id: id });
    } catch (err) {
      throw err;
    }
  }

  static async updateBlog(id, Title, Content) {
    try {
      return await Blog.findByIdAndUpdate(
        { _id: id },
        {
          Title,
          Content,
        }
      );
    } catch (err) {
      throw err;
    }
  }

  static async commentBlog(id, Owner, Content) {
    try {
      return await Blog.findByIdAndUpdate(
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
      // return {
      //   Status: 200,
      //   Blog: blog,
      // };
    } catch (err) {
      throw err;
      //   return {
      //     statusCode: 500,
      //     Error: err,
      //   };
    }
  }
  static async deleteBlog(id) {
    try {
      return await Blog.findByIdAndDelete({ _id: id });
    } catch (err) {
      throw err;
    }
  }
}
