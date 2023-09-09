// matchRoutes.js

const express = require("express");
const router = express.Router();
const Match = require("../models/MatchModel"); // Import your Match model here
const MatchController = require("../controllers/MatchesController");


// Define a route to create a new match
router.post("/", MatchController.insertNewMatch);
router.get("/", MatchController.getAllMatchs);
router.delete("/:team1", MatchController.deleteMatch);

// Define other routes for fetching matches, updating, deleting, etc. if needed

module.exports = router;
