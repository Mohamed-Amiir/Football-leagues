const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3111;
const bodyParser = require("body-parser");
const matchRoutes = require("./routes/matchRoutes");
app.use(bodyParser.json());
// 3rd party middleware
app.use(bodyParser.urlencoded({ extended: true })); // Use bodyParser for parsing form data
app.use(express.static(path.join(__dirname, "public")));
app.use("/dashboard", matchRoutes);

// Request main
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/Dashboard/dashboard.html"));
});
app.get("/Main-Page", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/Main-Page/football.html"));
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
