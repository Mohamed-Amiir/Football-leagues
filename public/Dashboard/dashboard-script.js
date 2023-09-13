const addllMatch = document.getElementById("add-ll-match"); // Laliga Form
const addplMatch = document.getElementById("add-pl-match"); // Premier League Form
const addsaMatch = document.getElementById("add-seriea-match"); // Sirea A Form

const team1Input = document.getElementById("team1"); // Laliga team 1
const team2Input = document.getElementById("team2"); // Laliga team 2

const team1PLInput = document.getElementById("pl-team1"); // Premier League team 1
const team2PLInput = document.getElementById("pl-team2"); // Premier League team 2

const team1SAInput = document.getElementById("sa-team1"); // Sirea A team 1
const team2SAInput = document.getElementById("sa-team2"); // Sirea A team 2

const matchesContainer = document.getElementById("laliga"); // Laliga Matchs Container
const deleteMatchButton = document.getElementById("delete-match-button"); // Laliga delete button

const plMatchesContainer = document.getElementById("pl"); // Premier League Matchs Container
const plDeleteMatchButton = document.getElementById("delete-pl-match-button"); // Premier League delete button

const saMatchesContainer = document.getElementById("seriea"); // Sirea A Matchs Container
const saDeleteMatchButton = document.getElementById("delete-sa-match-button"); // Sirea A delete button

/////////////////////////////////////////////////////////////////////     LALIGA CODE      ////////////////////////////////////////////////////////////////////////////////

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
// Event handler for adding a match laliga
addllMatch.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the input values
  const team1 = team1Input.value;
  const team2 = team2Input.value;

  fetch("/dashboard/Laliga", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ team1, team2 }),
  })
    .then((response) => response.json())
    .then(() => {
      fetchMatchs(); // Refresh the list of students
      addllMatch.reset();
    })
    .catch((error) => console.error(error));

  // Clear the input fields
  team1Input.value = "";
  team2Input.value = "";
});
deleteMatchButton.addEventListener("click", function () {
  // Get the input values
  const team1 = team1Input.value;

  fetch(`/dashboard/Laliga/${team1}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => {
      fetchMatchs("Laliga"); // Refresh the list of students
      addllMatch.reset();
    })
    .catch((error) => console.error(error));

  // Clear the input fields
  team1Input.value = "";
  team2Input.value = "";
});
fetchMatchs();

/////////////////////////////////////////////////////////////////////      PREMIER LEAGUE CODE     /////////////////////////////////////////////////////////////////////////

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
// Event handler for adding a match laliga
addplMatch.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the input values
  const team1 = team1PLInput.value;
  const team2 = team2PLInput.value;

  fetch("/dashboard/PremierLeague", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ team1, team2 }),
  })
    .then((response) => response.json())
    .then(() => {
      fetchPLMatchs(); // Refresh the list of students
      addplMatch.reset();
    })
    .catch((error) => console.error(error));

  // Clear the input fields
  team1PLInput.value = "";
  team2PLInput.value = "";
});
plDeleteMatchButton.addEventListener("click", function () {
  // Get the input values
  const team1 = team1PLInput.value;

  fetch(`/dashboard/PremierLeague/${team1}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => {
      fetchMatchs("PremierLeague"); // Refresh the list of students
      addplMatch.reset();
    })
    .catch((error) => console.error(error));

  // Clear the input fields
  team1PLInput.value = "";
  team2PLInput.value = "";
});
fetchPLMatchs();

/////////////////////////////////////////////////////////////////////      SIREA A CODE         ////////////////////////////////////////////////////////////////////////////

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
// Event handler for adding a match laliga
addsaMatch.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the input values
  const team1 = team1SAInput.value;
  const team2 = team2SAInput.value;

  fetch("/dashboard/SireaA", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ team1, team2 }),
  })
    .then((response) => response.json())
    .then(() => {
      fetchSAMatchs(); // Refresh the list of students
      addsaMatch.reset();
    })
    .catch((error) => console.error(error));

  // Clear the input fields
  team1SAInput.value = "";
  team2SAInput.value = "";
});
saDeleteMatchButton.addEventListener("click", function () {
  // Get the input values
  const team1 = team1SAInput.value;

  fetch(`/dashboard/SireaA/${team1}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => {
      fetchMatchs("SireaA"); // Refresh the list of students
      addsaMatch.reset();
    })
    .catch((error) => console.error(error));

  // Clear the input fields
  team1SAInput.value = "";
  team2SAInput.value = "";
});
fetchSAMatchs();
