import Joi from "joi";

export default class BlogValidation {
  static async blogFormValidation(req, res, next) {
    const SCHEMA = Joi.object({
      BlogTitle: Joi.string().min(3).required(),
      BlogContent: Joi.string().min(120).required(),
      BlogPic: Joi.string().uri(),
    });
    try {
      const { error } = SCHEMA.validate(req.body);
      if (error)
        return res.status(400).json({
          Error: error.details[0].message,
        });
      else next();
    } catch (err) {
      console.log(err);
    }
  }

  static async blogUpdateFormValidation(req, res, next) {
    const SCHEMA = Joi.object({
      Title: Joi.string(),
      Content: Joi.string(),
      Picture: Joi.string().uri(),
    });
    try {
      const { error } = SCHEMA.validate(req.body);
      if (error)
        return res.status(400).json({
          Error: error.details[0].message,
        });
      else next();
    } catch (err) {
      console.log(err);
    }
  }
}