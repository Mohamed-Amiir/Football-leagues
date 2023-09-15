const express = require("express");
const router = express.Router();
const MatchController = require("../controllers/MatchesController");
const validate = require("../middlewares/MatchValidatorMW");

router.get("/fetch/:league", MatchController.getAllMatchs);
router.post("/:league", validate, MatchController.insertNewMatch);
router.delete("/:league", MatchController.deleteMatch);

module.exports = router;
