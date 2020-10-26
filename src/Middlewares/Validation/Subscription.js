import Joi from "joi";

export default class SubscrValidation {
  static async subscrFormValidation(req, res, next) {
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
      else return next();
    } catch (err) {
      res.status(400).send(err);
    }
  }
}
