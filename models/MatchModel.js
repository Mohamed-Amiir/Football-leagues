const fs = require("fs");
const path = require("path");
const matchsPath = path.join(__dirname, "../matchs.json");

module.exports = class Match {
  constructor(t1, t2) {
    this.team1 = t1;
    this.team2 = t2;
  }

  saveMatch() {
    // 1) read from file
    fs.readFile(matchsPath, (err, info) => {
      if (!err) {
        let Matchs = JSON.parse(info);

        // 2) update data
        Matchs.push({
          team1: this.team1,
          team2: this.team2,
        });

        // 3) write into file
        fs.writeFile(matchsPath, JSON.stringify(Matchs), (err) => {
          if (err) {
            console.log("Error occurred while writing to file:", err);
          } else {
            console.log("Data saved successfully.");
          }
        });
      } else {
        console.log("Error occurred while reading file:", err);
      }
    });
  }

  static fetchAllStudents(callback) {
    fs.readFile(matchsPath, (err, info) => {
      if (!err) {
        callback(JSON.parse(info));
      } else {
        console.log("Error occurred while reading file:", err);
        callback([]);
      }
    });
  }
};
