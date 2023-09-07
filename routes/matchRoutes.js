// matchRoutes.js

const express = require("express");
const router = express.Router();
const Match = require("../models/MatchModel"); // Import your Match model here
const MatchController = require("../controllers/MatchesController");
// Define a route to create a new match
router.post("/", MatchController.createMatch);

// Define other routes for fetching matches, updating, deleting, etc. if needed

module.exports = router;
