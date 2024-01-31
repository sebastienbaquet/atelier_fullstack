const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().min(5).max(16).required(),
  confirmPassword: Joi.any().strip(),
});

const valideUser = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(422).json(error);
  } else {
    next();
  }
};

module.exports = valideUser;
