// controllers/MatchController.js

const { Match, Team } = require('../models/MatchModel');

// Controller function to create a new match
exports.createMatch = async (req, res) => {
  try {
    // Get data from the request body
    const { homeTeamName, awayTeamName } = req.body;

    // Find the home and away team objects in the "laligas" collection
    const homeTeam = await Team.findOne({ name: homeTeamName });
    const awayTeam = await Team.findOne({ name: awayTeamName });

    if (!homeTeam || !awayTeam) {
      return res.status(400).json({ message: 'One or both teams do not exist in the database.' });
    }

    // Ensure that "logo" is a Buffer for both home and away teams
    const homeTeamLogoBuffer = Buffer.from(homeTeam.logo, 'base64');
    const awayTeamLogoBuffer = Buffer.from(awayTeam.logo, 'base64');

    // Create a new match object with team data
    const match = new Match({
      homeTeam: { name: homeTeamName, logo: homeTeamLogoBuffer },
      awayTeam: { name: awayTeamName, logo: awayTeamLogoBuffer },
    });

    // Save the match to MongoDB
    await match.save();

    // Return the created match as the response
    res.status(201).json(match);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
