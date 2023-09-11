const fs = require("fs");
const path = require("path");
const teamsPath = path.join(__dirname, "../teams.json"); // Update the path

module.exports = class Match {
  constructor(t1, t2) {
    this.team1 = t1;
    this.team2 = t2;
  }

  saveMatch() {
    fs.readFile(teamsPath, (err, data) => {
      if (!err) {
        let jsonData = JSON.parse(data);

        // Update the "matchs" array
        jsonData.matchs.push({
          team1: this.team1,
          team2: this.team2,
        });

        // Write the updated data back to the file
        fs.writeFile(teamsPath, JSON.stringify(jsonData), (err) => {
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
      try {
        const football = JSON.parse(teamsData);
        const teams = football.teams;
        const matches = football.matchs;

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
  }
};
