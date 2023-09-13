const Joi = require("joi");

const schema = Joi.object({
  team1: Joi.string().required(),
  team2: Joi.string().required(),
});

module.exports = schema;
