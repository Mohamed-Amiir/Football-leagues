// // Retrieve the existing matches from localStorage
// const existingMatches = JSON.parse(localStorage.getItem("matches")) || [];
// const matchesContainer = document.getElementById("laliga");

// // Iterate through the existing matches and create match elements for each
// existingMatches.forEach((matchData) => {
//   const { team1, team2 } = matchData;

//   // Create a new match element
//   const matchElement = document.createElement("div");
//   matchElement.className = "match";
//   matchElement.innerHTML = `
//       <!-- Your match HTML template here -->
//       <div class="l-logo">
//           <img src="/Logos/Laliga/newLiga.ico" alt="laliga" />
//       </div>
//       <div class="home">
//           <div class="team-name">
//               <p>${team1}</p>
//           </div>
//           <div class="team">
//               <img src="/Logos/Laliga/Teams/${team1.toLowerCase()}.png" alt="${team1}" />
//           </div>
//       </div>
//       <div class="vs">
//           <p>VS</p>
//       </div>
//       <div class="away">
//           <div class="team">
//               <img src="/Logos/Laliga/Teams/${team2.toLowerCase()}.png" alt="${team2}" />
//           </div>
//           <div class="team-name">
//               <p>${team2}</p>
//           </div>
//       </div>
//   `;

//   // Append the match element to the container
//   matchesContainer.appendChild(matchElement);
// });

// Retrieve the existing matches for LaLiga from localStorage
const existingMatches = JSON.parse(localStorage.getItem("matches")) || [];
const matchesContainer = document.getElementById("laliga");

// Retrieve the existing matches for PL from localStorage
const existingPLMatches = JSON.parse(localStorage.getItem("plMatches")) || [];
const plMatchesContainer = document.getElementById("pl"); // PL container

// Function to create a match element for LaLiga
function createLaLigaMatchElement(team1, team2) {
  const matchElement = document.createElement("div");
  matchElement.className = "match laliga-match"; // Add a class for LaLiga matches
  matchElement.innerHTML = `
      <!-- Your match HTML template here -->
      <div class="l-logo">
          <img src="/Logos/Laliga/newLiga.ico" alt="LaLiga" />
      </div>
      <div class="home">
          <div class="team-name">
              <p>${team1}</p>
          </div>
          <div class="team">
              <img src="/Logos/Laliga/Teams/${team1.toLowerCase()}.png" alt="${team1}" />
          </div>
      </div>
      <div class="vs">
          <p>VS</p>
      </div>
      <div class="away">
          <div class="team">
              <img src="/Logos/Laliga/Teams/${team2.toLowerCase()}.png" alt="${team2}" />
          </div>
          <div class="team-name">
              <p>${team2}</p>
          </div>
      </div>
  `;

  return matchElement;
}

// Function to create a match element for Premier League
function createPLMatchElement(team1, team2) {
  const matchElement = document.createElement("div");
  matchElement.className = "match"; // Add a class for PL matches
  matchElement.innerHTML = `
      <!-- Your match HTML template here -->
      <div class="l-logo">
          <img src="/Logos/Premier-League/pl.jpeg" alt="Premier League" />
      </div>
      <div class="home">
          <div class="team-name">
              <p>${team1}</p>
          </div>
          <div class="team-pl">
              <img src="/Logos/Premier-League/Teams/${team1.toLowerCase()}.svg" alt="${team1}" />
          </div>
      </div>
      <div class="vs">
          <p>VS</p>
      </div>
      <div class="away">
          <div class="team-pl">
              <img src="/Logos/Premier-League/Teams/${team2.toLowerCase()}.svg" alt="${team2}" />
          </div>
          <div class="team-name">
              <p>${team2}</p>
          </div>
      </div>
  `;

  return matchElement;
}

// Iterate through the existing LaLiga matches and create match elements
existingMatches.forEach((matchData) => {
  const { team1, team2 } = matchData;
  const matchElement = createLaLigaMatchElement(team1, team2);
  matchesContainer.appendChild(matchElement);
});

// Iterate through the existing PL matches and create match elements
existingPLMatches.forEach((matchData) => {
  const { team1, team2 } = matchData;
  const matchElement = createPLMatchElement(team1, team2);
  plMatchesContainer.appendChild(matchElement);
});
