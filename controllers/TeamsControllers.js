const express = require("express");
const Team = require("../models/TeamModel");

let addNewTeam = async (req, res) => {
  try {
    const { buffer } = req.file;
    const { name, stadium } = req.body;
    const teamData = {
      name: name,
      stadium: stadium,
      logo: buffer, // Access the uploaded file's buffer
    };
    const newTeam = new Team(teamData);
    await newTeam.save();
    console.log("Team Saved Successfully");
    res.status(201).send("OK");
  } catch (err) {
    console.log("Error Saving team :", err);
    res.send(err);
  }
};


module.exports = {
  addNewTeam,
};
