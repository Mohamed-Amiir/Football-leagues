const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/football", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected...");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

// Use async/await to query the database and retrieve the league data
(async () => {
  try {
    const db = mongoose.connection;
    const collectionName = "Leagues"; // Replace with your actual collection name
    const leagueData = await db.getCollection(collectionName).find({});

    if (!leagueData || leagueData.length === 0) {
      console.log("No data found in the database.");
    } else {
      console.log(leagueData);
    }
  } catch (error) {
    console.error("Error querying the database:", error);
  }
})();
