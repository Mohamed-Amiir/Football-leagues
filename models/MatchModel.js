// models/MatchModel.js

const mongoose = require("mongoose");

// Define a schema for the "laligas" collection
const teamSchema = new mongoose.Schema({
  name: String,
  logo: Buffer,
});

// Define the "Match" schema that references the "laligas" collection
const matchSchema = new mongoose.Schema({
  homeTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "laligas", // Reference the "laligas" collection
  },
  awayTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "laligas", // Reference the "laligas" collection
  },
});

module.exports = {
  Match: mongoose.model("Match", matchSchema),
  Team: mongoose.model("laligas", teamSchema), // Export the "laligas" model
};
