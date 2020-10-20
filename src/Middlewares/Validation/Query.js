import Joi from "joi";

export default class QueryValidation {
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
}
