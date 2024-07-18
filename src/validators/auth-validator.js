const Joi = require("joi");

exports.registerSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string()
    .required()
    .pattern(/^[a-zA-Z0-9!@#$%^&*()-_=+?]{6,}$/),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).strip(),
  email: Joi.string().required().email({ tlds: false }),
});

exports.loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

exports.editSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).allow(""),
  password: Joi.string()
    .allow("")
    .pattern(/^[a-zA-Z0-9!@#$%^&*()-_=+?]{6,}$/),
  confirmPassword: Joi.string().valid(Joi.ref("password")),
  currentPassword: Joi.string().required(),
});
