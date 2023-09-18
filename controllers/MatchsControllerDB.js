const Match = require("../models/MatchModelDB");

let getAllMatchs = async (req, res) => {
  const LEAGUE = req.params.league;
  let matchs = await Match.LEAGUE.findOne({}).matchs;
  res.send(matchs);
  console.log("Display all students informations....");
};

let insertNewMatch = (req, res) => {
  const LEAGUE = req.params.league;
  let mtch = new Match.LEAGUE({
    team1: req.body.team1,
    team2: req.body.team2,
  });
  Match.LEAGUE.findOne({}).teams.push(mtch);
};

let deleteMatch = (req, res) => {};

module.exports = {
  getAllMatchs,
  insertNewMatch,
  deleteMatch,
};
