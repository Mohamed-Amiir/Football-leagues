const fs = require("fs");
const path = require("path");
const matchsPath = path.join(__dirname,"./matchs.json");


fs.readFile(matchsPath, (err, data) => {
  if (err) {
    console.error("Error reading matchs.json:", err);
    return;
  }

  let Matchs = JSON.parse(data);

  // Ensure Matchs.Laliga is an array before pushing data
  if (!Array.isArray(Matchs.Laliga)) {
    Matchs.Laliga = [];
  }

  Matchs.Laliga.push({ team1: "Munich", team2: "Dortumond" });

  fs.writeFile(matchsPath, JSON.stringify(Matchs, null, 2), (err) => {
    if (err) {
      console.error("Error writing matchs.json:", err);
    } else {
      console.log("Match added successfully");
    }
  });
});



fs.readFile(matchsPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      return;
    }
  
    try {
      const jsonObject = JSON.parse(data);
  
      // Check if the JSON data is an array or an object
      if (Array.isArray(jsonObject)) {
        // If it's an array, iterate through each item
        jsonObject.forEach((item, index) => {
          console.log(`Document ${index + 1}:`, item);
          // You can perform operations on each document here
        });
      } else if (typeof jsonObject === "object") {
        // If it's an object, iterate through its properties
        for (const key in jsonObject) {
          if (jsonObject.hasOwnProperty(key)) {
            const item = jsonObject[key];
            console.log(`Document "${key}":`, item);
            // You can perform operations on each document here
          }
        }
      } else {
        console.error("Invalid JSON format. Expected an array or an object.");
      }
    } catch (parseError) {
      console.error("Error parsing JSON data:", parseError);
    }
  });