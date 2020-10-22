import BlogServices from "../Services/BlogServices";
export default class BlogControllers {
  static async getAllBlogs(req, res) {
    try {
      let result = await BlogServices.getAllBlogs();
      if (statusCode === 500) return res.status(500).send(Error);
      if (Blogs.length)
        return res.status(200).json({
          Message: `${Blogs.length} Blogs retrieved`,
          Blogs,
        });
      return res.status(404).json({
        Message: "No Blogs added yet",
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async getBlog(req, res) {
    let { id } = req.params;
    try {
      let { statusCode, Blog, Error } = BlogServices.getABlog(id);
      if (statusCode === 500) return res.status(500).send(Error);
      if (Blog)
        return res.status(200).json({
          Message: "Blog retrieved",
          Blog: blog,
        });
      return res.status(404).json({
        Message: "Resource not found",
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async addBlog(req, res) {
    let { Title, Content } = req.body;
    try {
      let { statusCode, Blog, Error } = BlogServices.addBlog(Title, Content);
      if (statusCode === 500) return res.status(500).send(Error);
      return res.status(201).json({
        Message: "Blog created",
        Blog,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async updateBlog(req, res) {
    let { id } = req.params;
    let { Title, Content } = req.body;
    try {
      let { statusCode, Blog, Error } = BlogServices.updateBlog(
        id,
        Title,
        Content
      );
      if (statusCode === 500) return res.status(500).send(Error);
      if (Blog)
        return res.status(201).json({
          Message: "Blog successfully updated",
          Blog,
        });
      return res.status(404).json({
        Message: "Resource not found",
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async commentBlog(req, res) {
    let { id } = req.params;
    let { Owner, Content } = req.body;
    try {
      let { statusCode, Blog, Error } = BlogServices.commentBlog(
        id,
        Owner,
        Content
      );
      if (statusCode === 500) return res.status(500).send(Error);
      if (Blog)
        return res.status(201).json({
          Message: "Comment successfully added",
          Blog,
        });
      return res.status(404).json({
        Message: "Resource not found",
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async deleteBlog(req, res) {
    let { id } = req.params;
    try {
      let { statusCode, Blog, Error } = BlogServices.deleteBlog(id);
      if (statusCode === 500) return res.status(500).send(Error);
      if (Blog)
        return res.status(200).json({
          Message: "Blog deleted",
          Blog,
        });
      return res.status(404).json({
        Message: "Resource not found",
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
