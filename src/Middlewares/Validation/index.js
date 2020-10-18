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
      res.status(400).json({
        Error: error.details[0].message,
      });
    } catch (err) {
      console.log(err);
    }
    next();
  }

  static async loginFormValidation(req, res, next) {
    const SCHEMA = Joi.object({
      Email: Joi.string().email().required(),
      Password: Joi.string().min(7).required(),
    });
    try {
      const { error } = SCHEMA.validate(req.body);
      res.status(400).json({
        Error: error.details[0].message,
      });
    } catch (err) {
      console.log(err);
    }
    next();
  }

  static async registerFormValidation(req, res, next) {
    const SCHEMA = Joi.object({
      Firstname: Joi.string().min(3).required(),
      Lastname: Joi.string().min(120).required(),
      Email: Joi.string().email().required(),
      Password: Joi.ref(Password),
      retype_Password: Joi.string().min(7).required(),
    });
    try {
      const { error } = SCHEMA.validate(req.body);
      res.status(400).json({
        Error: error.details[0].message,
      });
    } catch (err) {
      console.log(err);
    }
    next();
  }

  static async queryFormValidation(req, res, next) {
    const SCHEMA = Joi.object({
      QueryOwner: Joi.string().min(3).required(),
      Email: Joi.string().email().required(),
      QueryContent: Joi.string().min(24).required(),
    });
    try {
      const { error } = SCHEMA.validate(req.body);
      res.status(400).json({
        Error: error.details[0].message,
      });
    } catch (err) {
      console.log(err);
    }
    next();
  }
}
