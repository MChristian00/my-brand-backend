import Joi from "joi";

export default class UserValidation {
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
      Role: Joi.string(),
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
}
