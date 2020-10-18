import Joi from "joi";

export default class Validation {
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

  static async loginFormValidation(req, res, next) {
    const SCHEMA = Joi.object({
      Email: Joi.string().email().required(),
      Password: Joi.string().min(7).required(),
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

  static async registerFormValidation(req, res, next) {
    const SCHEMA = Joi.object({
      Firstname: Joi.string().min(2).required(),
      Lastname: Joi.string().min(2).required(),
      Email: Joi.string().email().required(),
      Password: Joi.string().min(7).required(),
      retype_Password: Joi.ref("Password"),
    }).with("Password", "retype_Password");
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

  static async queryFormValidation(req, res, next) {
    const SCHEMA = Joi.object({
      QueryOwner: Joi.string().min(2).required(),
      Email: Joi.string().email().required(),
      QueryContent: Joi.string().min(24).required(),
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

  static async subscribeFormValidation(req, res, next) {
    const SCHEMA = Joi.object({
      Name: Joi.string().min(3).required(),
      Email: Joi.string().email().required(),
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
