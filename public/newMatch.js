// Retrieve the existing matches from localStorage
const existingMatches = JSON.parse(localStorage.getItem("matches")) || [];
const matchesContainer = document.getElementById("laliga");

// Iterate through the existing matches and create match elements for each
existingMatches.forEach((matchData) => {
  const { team1, team2 } = matchData;

  // Create a new match element
  const matchElement = document.createElement("div");
  matchElement.className = "match";
  matchElement.innerHTML = `
      <!-- Your match HTML template here -->
      <div class="l-logo">
          <img src="/Logos/Laliga/newLiga.ico" alt="laliga" />
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

  // Append the match element to the container
  matchesContainer.appendChild(matchElement);
});
