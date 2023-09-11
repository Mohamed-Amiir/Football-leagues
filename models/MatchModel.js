const fs = require("fs");
const path = require("path");
const matchsPath = path.join(__dirname, "../matchs.json");
const teamsPath = path.join(__dirname, "../teams.json");

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

  static fetchAllMatchs(callback) {
    fs.readFile(teamsPath, (err, teamsData) => {
      if (err) {
        return callback(err);
      }

      fs.readFile(matchsPath, (err, matchesData) => {
        if (err) {
          console.error("Error occurred while reading file:", err);
          return callback([]);
        }

        try {
          const teams = JSON.parse(teamsData);
          const matches = JSON.parse(matchesData);

          // Create an array to store the results
          const matchObjects = [];

          matches.forEach((element) => {
            const teamOneObject = teams.find(
              (team) => team.name === element.team1
            );
            const teamTwoObject = teams.find(
              (team) => team.name === element.team2
            );

            if (!teamOneObject || !teamTwoObject) {
              console.error("One or both teams not found for match:", element);
              // Skip this match and continue to the next one
              return;
            }

            // Create an object for the match and push it to the result array
            const matchObject = {
              teamOne: teamOneObject,
              teamTwo: teamTwoObject,
            };
            matchObjects.push(matchObject);
          });

          // Return the array of match objects
          callback(null, matchObjects);
        } catch (parseError) {
          callback(parseError);
        }
      });
    });
  }
};
