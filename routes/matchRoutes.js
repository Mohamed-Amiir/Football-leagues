const express = require("express");
const router = express.Router();
const MatchController = require("../controllers/MatchesController");

router.get("/fetch/:league", MatchController.getAllMatchs);
router.post("/:league", MatchController.insertNewMatch);
router.delete("/:league/:team1", MatchController.deleteMatch);

module.exports = router;
