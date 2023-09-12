// matchRoutes.js

const express = require("express");
const router = express.Router();
const MatchController = require("../controllers/MatchesController");

// Define a route to create a new match
router.post("/:league", MatchController.insertNewMatch);
router.get("/fetch/:league", MatchController.getAllMatchs);
router.delete("/:league/:team1", MatchController.deleteMatch);

// Define other routes for fetching matches, updating, deleting, etc. if needed

module.exports = router;
