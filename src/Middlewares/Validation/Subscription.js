import Joi from "joi";

export default class SubValidation {
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
