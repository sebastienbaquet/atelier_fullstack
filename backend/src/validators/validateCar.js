const Joi = require("joi");

const schema = Joi.object({
  id: Joi.number(),
  brand: Joi.string().required(),
  engine: Joi.string().min(5).max(16).required(),
  image: Joi.string().required(),
  fonction_id: Joi.number(),
  fonction_label: Joi.string(),
});

const valideCar = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(422).json(error);
  } else {
    next();
  }
};

module.exports = valideCar;
