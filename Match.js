// // Match.js
// const fetchMatches = async () => {
//   try {
//     const response = await fetch('/matches');
//     const matches = await response.json();

//     const laligaContainer = document.getElementsByClassName('laliga'); // Get the "laliga" container

//     matches.forEach((match) => {
//       const matchDiv = document.createElement('div');
//       matchDiv.className = 'match';
//       matchDiv.innerHTML = `
//         <!-- Your HTML structure here, using match data -->
//         <div class="l-logo">
//           <img src="data:image/png;base64,${arrayBufferToBase64(match.homeTeam.logo)}" alt="${match.homeTeam.name}" />
//         </div>
//         <div class="home">
//           <!-- Home team data -->
//           <div class="team-name">
//             <p>${match.homeTeam.name}</p>
//           </div>
//           <div class="team-ll">
//             <img src="data:image/png;base64,${arrayBufferToBase64(match.homeTeam.logo)}" alt="${match.homeTeam.name}" />
//           </div>
//         </div>
//         <div class="vs">
//           <p>VS</p>
//         </div>
//         <div class="away">
//           <!-- Away team data -->
//           <div class="team-ll">
//             <img src="data:image/png;base64,${arrayBufferToBase64(match.awayTeam.logo)}" alt="${match.awayTeam.name}" />
//           </div>
//           <div class="team-name">
//             <p>${match.awayTeam.name}</p>
//           </div>
//         </div>
//       `;

//       laligaContainer.appendChild(matchDiv); // Append the match to the "laliga" container
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

// // Function to convert ArrayBuffer to base64
// function arrayBufferToBase64(buffer) {
//   const binary = new Uint8Array(buffer);
//   const array = Array.from(binary);
//   return btoa(array.map(byte => String.fromCharCode(byte)).join(''));
// }

// document.addEventListener('DOMContentLoaded', () => {
//   fetchMatches();
// });
// Get references to HTML elements
const Team = require("./models/TeamModel");

const matchesContainer = document.getElementById("laliga");

const addMatchForm = document.getElementById("add-match-form");
const team1Input = document.getElementById("team1");
const team2Input = document.getElementById("team2");

const teamHome = Team.findOne({ name: team1Input });
const teamAway = Team.findOne({ name: team2Input });

// Event handler for adding a match
addMatchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the input values
  const team1 = team1Input.value;
  const team2 = team2Input.value;

  // Create a new match element
  const matchElement = document.createElement("div");
  matchElement.className = "match";
  matchElement.innerHTML = `
  <div class="l-logo">
      <img src="/Logos/Laliga/newLiga.ico" alt="laliga" />
  </div>
  <div class="home">
      <div class="team-name">
          <p>${teamHome.name}</p>
      </div>
      <div class="team">
          <img src="${teamHome.logo}" alt="${team1}" />
      </div>
  </div>
  <div class="vs">
      <p>VS</p>
  </div>
  <div class="away">
      <div class="team">
          <img src="${teamAway.logo}" alt="${team2}" />
      </div>
      <div class="team-name">
          <p>${teamAway.name}</p>
      </div>
  </div>
  
`;

  // Append the match element to the container
  matchesContainer.appendChild(matchElement);

  // Clear the input fields
  team1Input.value = "";
  team2Input.value = "";
});
