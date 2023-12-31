const mongoose = require("mongoose");

// Define the Team schema
const teamSchema = new mongoose.Schema({
  name: String,
  logo: String,
  stadium: String,
});

// Define the Match schema
const matchSchema = new mongoose.Schema({
  team1: teamSchema,
  team2: teamSchema,
});

// Define the main schema for the document
const leagueSchema = new mongoose.Schema({
  teams: [teamSchema], // Array of teams
  matchs: [matchSchema], // Array of matches (corrected from matchs)
  league: String, // League name
});

// Create a model based on the schema
const League = mongoose.model("Leagues", leagueSchema);

module.exports = League;
