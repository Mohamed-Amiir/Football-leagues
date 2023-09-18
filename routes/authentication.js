const express = require("express");
const router = express.Router();
const authController = require("../controllers/AuthenticationControlller");

router.post("/admin", authController.login);

module.exports = router;
