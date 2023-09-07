//1- require mongoose
const mongoose = require("mongoose");
//2- connect to db
//this step is setted in the entry point of the project -> app.js

//3- create schema
const TeamSchema = new mongoose.Schema({
  name: String,
  logo: {
    type: Buffer,
    required: true,
  },
  stadium: {
    type: String,
    required: true,
    unique: true,
  },
});
// TeamSchema.index({ id: 1 }); // Creating an index on the 'id' field
//4- create model
const Team = mongoose.model("laligas", TeamSchema);
module.exports = Team;
