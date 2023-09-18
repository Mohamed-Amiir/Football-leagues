const matchesContainer = document.getElementById("laliga"); // Laliga Matchs Container
const plMatchesContainer = document.getElementById("pl"); // Premier League Matchs Container
const saMatchesContainer = document.getElementById("seriea"); // Sirea A Matchs Container
const laligaButton = document.getElementById("laliga-button");
const plButton = document.getElementById("pl-button");
const saButton = document.getElementById("sa-button");
//////////////////////////////////////      LALIGA       //////////////////////////////////////

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
                <p>${team1.name}</p>
            </div>
            <div class="team-ll">
                <img src="${team1.logo}" alt="${team1.name}" />
            </div>
        </div>
        <div class="vs">
            <p>VS</p>
        </div>
        <div class="away">
            <div class="team-ll">
                <img src="${team2.logo}" alt="${team2.name}" />
            </div>
            <div class="team-name">
                <p>${team2.name}</p>
            </div>
        </div>
    `;

  return matchElement;
}
function fetchMatchs() {
  fetch("/dashboard/fetch/LaLiga")
    .then((response) => response.json())
    .then((matches) => {
      matchesContainer.innerHTML = "";
      matches.forEach((match) => {
        const mtch = createLaLigaMatchElement(match.team1, match.team2); // Corrected typo
        matchesContainer.appendChild(mtch);
      });
    })
    .catch((error) => console.error(error));
}
fetchMatchs();
laligaButton.addEventListener("click", function () {
  // Check if the container is currently visible
  if (matchesContainer.style.display == "none") {
    // Show the container
    matchesContainer.style.display = "block";
    laligaButton.style.backgroundColor = "green";
  } else {
    // Hide the container
    matchesContainer.style.display = "none";
    laligaButton.style.backgroundColor = "red";
  }
});

////////////////////////////////      PREMIER LEAGUE       ////////////////////////////////////

function createPremierLeagueMatchElement(team1, team2) {
  const matchElement = document.createElement("div");
  matchElement.className = "match"; // Add a class for LaLiga matches
  matchElement.innerHTML = `
      <!-- Your match HTML template here -->
      <div class="l-logo">
          <img src="/Logos/Premier-League/pl.jpeg" alt="Premier-League" />
      </div>
      <div class="home">
          <div class="team-name">
              <p>${team1.name}</p>
          </div>
          <div class="team-pl">
              <img src="${team1.logo}" alt="${team1.name}" />
          </div>
      </div>
      <div class="vs">
          <p>VS</p>
      </div>
      <div class="away">
          <div class="team-pl">
              <img src="${team2.logo}" alt="${team2.name}" />
          </div>
          <div class="team-name">
              <p>${team2.name}</p>
          </div>
      </div>
  `;

  return matchElement;
}
function fetchPLMatchs() {
  fetch("/dashboard/fetch/Premier-League")
    .then((response) => response.json())
    .then((matches) => {
      plMatchesContainer.innerHTML = "";
      matches.forEach((match) => {
        const mtch = createPremierLeagueMatchElement(match.team1, match.team2); // Corrected typo
        plMatchesContainer.appendChild(mtch);
      });
    })
    .catch((error) => console.error(error));
}
fetchPLMatchs();
plButton.addEventListener("click", function () {
  // Check if the container is currently visible
  if (plMatchesContainer.style.display == "none") {
    // Show the container
    plMatchesContainer.style.display = "block";
    plButton.style.backgroundColor = "green";
  } else {
    // Hide the container
    plMatchesContainer.style.display = "none";
    plButton.style.backgroundColor = "red";
  }
});
//////////////////////////////////////      SIREA A       //////////////////////////////////////

function createSireaAMatchElement(team1, team2) {
  const matchElement = document.createElement("div");
  matchElement.className = "match"; // Add a class for LaLiga matches
  matchElement.innerHTML = `
      <!-- Your match HTML template here -->
      <div class="l-logo">
          <img src="/Logos/SireaA/seriea.jpg" alt="Sirea A" />
      </div>
      <div class="home">
          <div class="team-name">
              <p>${team1.name}</p>
          </div>
          <div class="team-sa">
              <img src="${team1.logo}" alt="${team1.name}" />
          </div>
      </div>
      <div class="vs">
          <p>VS</p>
      </div>
      <div class="away">
          <div class="team-sa">
              <img src="${team2.logo}" alt="${team2.name}" />
          </div>
          <div class="team-name">
              <p>${team2.name}</p>
          </div>
      </div>
  `;

  return matchElement;
}
function fetchSAMatchs() {
  fetch("/dashboard/fetch/SerieA")
    .then((response) => response.json())
    .then((matches) => {
      saMatchesContainer.innerHTML = "";
      matches.forEach((match) => {
        const mtch = createSireaAMatchElement(match.team1, match.team2); // Corrected typo
        saMatchesContainer.appendChild(mtch);
      });
    })
    .catch((error) => console.error(error));
}
fetchSAMatchs();
saButton.addEventListener("click", function () {
  // Check if the container is currently visible
  if (saMatchesContainer.style.display == "none") {
    // Show the container
    saMatchesContainer.style.display = "block";
    saButton.style.backgroundColor = "green";
  } else {
    // Hide the container
    saMatchesContainer.style.display = "none";
    saButton.style.backgroundColor = "red";
  }
});
