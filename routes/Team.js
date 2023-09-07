const express = require("express");
const router = express.Router();
const teamController = require("../controllers/TeamsControllers");
const multer = require("multer");


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post("/", upload.single("logo"),teamController.addNewTeam);

module.exports = router;