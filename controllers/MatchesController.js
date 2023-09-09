const Match = require("../models/MatchModel");

let getAllMatchs = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  // res.json(Student.fetchAllStudents());
  Student.fetchAllStudents((obj) => {
    res.json(obj);
    // res.render("students.ejs", {
    //   std: obj,
    // });
  });
};
let insertNewMatch = (req, res) => {
  let mtch = new Match(req.body.team1, req.body.team2);
  mtch.saveMatch();
  res.json(req.body);
};

let deleteMatch = (req, res) => {
  let idx = matchs.findIndex((val) => {
    return val.id == req.params.id;
  });
  if (idx != -1) {
    matchs.splice(idx, 1);
  } else {
    res.send("Student does NOT found");
  }
};

module.exports = {
  getAllMatchs,
  insertNewMatch,
  deleteMatch,
};
