// Retrieve the existing matches for LaLiga from localStorage
const existingLLMatches = JSON.parse(localStorage.getItem("matches")) || [];
const matchesContainer = document.getElementById("laliga");

// Retrieve the existing matches for PL from localStorage
const existingPLMatches = JSON.parse(localStorage.getItem("plMatches")) || [];
const plMatchesContainer = document.getElementById("pl"); // PL container

const existingSAMatches = JSON.parse(localStorage.getItem("saMatches")) || [];
const saMatchesContainer = document.getElementById("seriea"); // PL container

// Function to create a match element for LaLiga
function createLaLigaMatchElement(team1, team2) {
  const matchElement = document.createElement("div");
  matchElement.className = "match"; // Add a class for LaLiga matches
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
// Function to create a match element for Sirea A
function createSAMatchElement(team1, team2) {
  const matchElement = document.createElement("div");
  matchElement.className = "match"; // Add a class for SA matches
  matchElement.innerHTML = `
      <!-- Your match HTML template here -->
      <div class="l-logo">
          <img src="/Logos/SireaA/seriea.jpg" alt="Sirea A" />
      </div>
      <div class="home">
          <div class="team-name">
              <p>${team1}</p>
          </div>
          <div class="team-sa">
              <img src="/Logos/SireaA/Teams/${team1.toLowerCase()}.webp" alt="${team1}" />
          </div>
      </div>
      <div class="vs">
          <p>VS</p>
      </div>
      <div class="away">
          <div class="team-sa">
              <img src="/Logos/SireaA/Teams/${team2.toLowerCase()}.webp" alt="${team2}" />
          </div>
          <div class="team-name">
              <p>${team2}</p>
          </div>
      </div>
  `;

  return matchElement;
}

// Iterate through the existing LaLiga matches and create match elements
existingLLMatches.forEach((matchData) => {
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

// Iterate through the existing SA matches and create match elements
existingSAMatches.forEach((matchData) => {
  const { team1, team2 } = matchData;
  const matchElement = createSAMatchElement(team1, team2);
  saMatchesContainer.appendChild(matchElement);
});
