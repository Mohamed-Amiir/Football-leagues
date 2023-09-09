const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    team1: {
      type: "string",
    },
    team2: {
      type: "string",
    },
  },
  required: ["team1", "team2"],
};

const validate = ajv.compile(schema);

module.exports = validate;