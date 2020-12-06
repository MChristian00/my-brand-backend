import BlogServices from "../Services/BlogServices";
export default class BlogControllers {
  static async getAllBlogs(req, res) {
    try {
      await BlogServices.getAllBlogs()
        .then((Blogs) => {
          if (Blogs.length)
            return res.status(200).json({
              Message: `${Blogs.length} Blogs retrieved`,
              Blogs,
            });
          return res.status(404).json({
            Message: "No Blogs added yet",
          });
        })
        .catch((error) => {
          res.status(500).json({
            Error: error,
          });
        });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async getBlog(req, res) {
    let { id } = req.params;
    try {
      await BlogServices.getABlog(id)
        .then((Blog) => {
          if (Blog)
            return res.status(200).json({
              Message: "Blog retrieved",
              Blog,
            });
          return res.status(404).json({
            Error: "Resource not found",
          });
        })
        .catch((error) => {
          res.status(500).json({
            Error: error,
          });
        });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async addBlog(req, res) {
    let { Title, Content, Picture } = req.body;
    try {
      await BlogServices.addBlog(Title, Content, Picture)
        .then((Blog) => {
          return res.status(201).json({
            Message: "Blog created",
            Blog,
          });
        })
        .catch((error) => {
          res.status(500).json({
            Error: error,
          });
        });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async updateBlog(req, res) {
    let { id } = req.params;
    let { Title, Content } = req.body;
    try {
      await BlogServices.updateBlog(id, Title, Content)
        .then((Blog) => {
          if (Blog)
            return res.status(201).json({
              Message: "Blog successfully updated",
              Blog,
            });
          return res.status(404).json({
            Error: "Resource not found",
          });
        })
        .catch((error) => {
          res.status(500).json({
            Error: error,
          });
        });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async commentBlog(req, res) {
    let { id } = req.params;
    let { Content } = req.body;
    let { Firstname, Lastname } = req.userData;
    let Owner = `${Firstname} ${Lastname}`;
    try {
      await BlogServices.commentBlog(id, Owner, Content)
        .then((Blog) => {
          if (Blog)
            return res.status(201).json({
              Message: "Comment successfully added",
              Blog,
            });
          return res.status(404).json({
            Error: "Resource not found",
          });
        })
        .catch((error) => {
          res.status(500).json({
            Error: error,
          });
        });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  static async deleteBlog(req, res) {
    let { id } = req.params;
    try {
      await BlogServices.deleteBlog(id)
        .then((Blog) => {
          if (Blog)
            return res.status(200).json({
              Message: "Blog deleted",
              Blog,
            });
          return res.status(404).json({
            Error: "Resource not found",
          });
        })
        .catch((error) => {
          res.status(500).json({
            Error: error,
          });
        });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
