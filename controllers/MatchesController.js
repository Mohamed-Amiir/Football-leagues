const Match = require("../models/MatchModel");
const fs = require("fs");
const path = require("path");
const matchsPath = path.join(__dirname, "../matchs.json");

let getAllMatchs = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  // res.json(Student.fetchAllStudents());
  Match.fetchAllMatchs((obj) => {
    res.json(obj);
  });
};
let insertNewMatch = (req, res) => {
  let mtch = new Match(req.body.team1, req.body.team2);
  mtch.saveMatch();
  res.json(req.body);
};

let deleteMatch = (req, res) => {
  fs.readFile(matchsPath, (err, data) => {
    if (err) {
      console.error("Error reading matchs.json:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    let Matchs = JSON.parse(data);

    // Find the index of the match with the specified team1
    let idx = Matchs.findIndex((match) => match.team1 === req.params.team1);

    if (idx !== -1) {
      // Remove the match from the array
      Matchs.splice(idx, 1);

      // Write the updated data back to the file
      fs.writeFile(matchsPath, JSON.stringify(Matchs), (writeErr) => {
        if (writeErr) {
          console.error("Error writing matchs.json:", writeErr);
          res.status(500).send("Internal Server Error");
        } else {
          res.send("Match deleted successfully");
        }
      });
    } else {
      res.status(404).send("Match not found");
    }
  });
};

module.exports = {
  getAllMatchs,
  insertNewMatch,
  deleteMatch,
};
