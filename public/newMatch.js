const matchesContainer = document.getElementById("laliga"); // Laliga Matchs Container
const plMatchesContainer = document.getElementById("pl"); // Premier League Matchs Container
const saMatchesContainer = document.getElementById("seriea"); // Sirea A Matchs Container

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
            <div class="team">
                <img src="${team1.logo}" alt="${team1.name}" />
            </div>
        </div>
        <div class="vs">
            <p>VS</p>
        </div>
        <div class="away">
            <div class="team">
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
  fetch("/dashboard/fetch/Laliga")
    .then((response) => response.json())
    .then((matches) => {
      matchesContainer.innerHTML = "";
      matches.forEach((match) => {
        const mtch = createLaLigaMatchElement(match.teamOne, match.teamTwo); // Corrected typo
        matchesContainer.appendChild(mtch);
      });
    })
    .catch((error) => console.error(error));
}
fetchMatchs();

//////////////////////////////////////      PREMIER LEAGUE       //////////////////////////////////////

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
          <div class="team">
              <img src="${team1.logo}" alt="${team1.name}" />
          </div>
      </div>
      <div class="vs">
          <p>VS</p>
      </div>
      <div class="away">
          <div class="team">
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
  fetch("/dashboard/fetch/PremierLeague")
    .then((response) => response.json())
    .then((matches) => {
      plMatchesContainer.innerHTML = "";
      matches.forEach((match) => {
        const mtch = createPremierLeagueMatchElement(
          match.teamOne,
          match.teamTwo
        ); // Corrected typo
        plMatchesContainer.appendChild(mtch);
      });
    })
    .catch((error) => console.error(error));
}
fetchPLMatchs();

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
          <div class="team">
              <img src="${team1.logo}" alt="${team1.name}" />
          </div>
      </div>
      <div class="vs">
          <p>VS</p>
      </div>
      <div class="away">
          <div class="team">
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
  fetch("/dashboard/fetch/SireaA")
    .then((response) => response.json())
    .then((matches) => {
      saMatchesContainer.innerHTML = "";
      matches.forEach((match) => {
        const mtch = createSireaAMatchElement(match.teamOne, match.teamTwo); // Corrected typo
        saMatchesContainer.appendChild(mtch);
      });
    })
    .catch((error) => console.error(error));
}
fetchSAMatchs();
