const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 8001;
const teamRoute = require("./routes/Team");
const bodyParser = require("body-parser");
// const matchRoutes = require("./routes/matchRoutes"); // Import the match router
app.use(bodyParser.json());
// 3rd party middleware
app.use(bodyParser.urlencoded({ extended: true })); // Use bodyParser for parsing form data

app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the 'public' folder

app.use("/upload", teamRoute);
// app.use("/matches", matchRoutes);

// Request main
app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../Football-leagues/public/football.html")
  );
});

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

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
