const validator = require("../util/matchValdiator");
module.exports = (req, res, next) => {
  let valid = validator.validate(req.body);
  if (valid) {
    req.valid = 1;
    next();
  } else res.status(403).send("forbidden command !!");
};
