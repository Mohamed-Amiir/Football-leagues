const express = require("express");
const router = express.Router();
const League = require("../models/MatchModelDB");

router.get("/fetch/:leagueName", async (req, res) => {
  try {
    const leagueData = await League.findOne({ league: req.params.leagueName });
    if (!leagueData) {
      return res.status(404).send("League not found");
    }

    const matchs = leagueData.matchs;
    // Put res.render inside the try block
    res.send(matchs);
    console.log("Display all matchs from " + leagueData.league + " league...");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/:leagueName", async (req, res) => {
  try {
    const leagueDocument = await League.findOne({
      league: req.params.leagueName,
    });

    if (!leagueDocument) {
      return res.status(404).send("League document not found");
    }
    const Teams = leagueDocument.teams;
    const home = Teams.find((obj) => obj.name === req.body.team1);
    const away = Teams.find((obj) => obj.name === req.body.team2);
    const newMatch = {
      team1: home,
      team2: away,
    };
    leagueDocument.matchs.push(newMatch);
    await leagueDocument.save();

    res.status(201).send("Match added successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding match");
  }
});

router.delete("/:leagueName", async (req, res) => {
  try {
    const leagueDocument = await League.findOne({
      league: req.params.leagueName,
    });

    if (!leagueDocument) {
      return res.status(404).send("League document not found");
    }

    // Find the index of the match in the "matchs" array
    const matchIndex = leagueDocument.matchs.findIndex(
      (match) => match.team1.name === req.body.team1
    );

    if (matchIndex === -1) {
      return res.status(404).send("Match not found");
    }

    // Remove the match from the array
    leagueDocument.matchs.splice(matchIndex, 1);

    await leagueDocument.save();

    res.status(200).send("Match deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting match");
  }
});

module.exports = router;
