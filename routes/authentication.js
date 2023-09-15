const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const usersPath = path.join(__dirname, "../data/users.json");

router.post("/admin", (req, res) => {
  // Read the content of the JSON file
  fs.readFile(usersPath, (err, data) => {
    if (err) {
      // Handle any errors while reading the file
      return res
        .status(500)
        .json({ status: "error", message: "Internal Server Error" });
    }

    try {
      // Parse the JSON content of the file
      const Users = JSON.parse(data);

      //check email
      let user = Users.find((u) => u.email === req.body.Email);
      if (!user)
        return res
          .status(400)
          .json({ status: "error", message: "Invalid Email!" });
      //check password
      if (user.password !== req.body.Password)
        return res
          .status(400)
          .json({ status: "error", message: "Invalid Password!" });
    } catch (parseError) {
      // Handle any errors while parsing the JSON content
      return res
        .status(500)
        .json({ status: "error", message: "Error parsing JSON data" });
    }

    // Set a session variable to indicate the user is logged in
    req.session.isLoggedIn = true;
    res
      .status(200)
      .json({ status: "success", message: "Logged in successfully" });
  });
});

module.exports = router;

/*
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const usersPath = path.join(__dirname, "../users.json");
router.post("/admin", (req, res) => {
  let Users = JSON.parse(usersPath);
  //check email
  let user = Users.find((u) => u.email === req.body.Email);
  if (!user)
    return res.status(400).json({ status: "error", message: "Invalid Email!" });
  //check password
  if (user.password !== req.body.Password)
    return res
      .status(400)
      .json({ status: "error", message: "Invalid Password!" });

  // Set a session variable to indicate the user is logged in
  req.session.isLoggedIn = true;
  res
    .status(200)
    .json({ status: "success", message: "Logged in successfully" });
});

module.exports = router;

*/
