const addllMatch = document.getElementById("add-ll-match");
const addPLMatch = document.getElementById("add-pl-match"); // Add PL match form
const addSAMatch = document.getElementById("add-seriea-match"); // Add SA match form
const team1Input = document.getElementById("team1");
const team2Input = document.getElementById("team2");
const plTeam1Input = document.getElementById("pl-team1"); // PL Team 1 input
const plTeam2Input = document.getElementById("pl-team2"); // PL Team 2 input
const saTeam1Input = document.getElementById("sa-team1"); // SA Team 1 input
const saTeam2Input = document.getElementById("sa-team2"); // SA Team 2 input
const deleteMatchButton = document.getElementById("delete-match-button");
const deletePLMatchButton = document.getElementById("delete-pl-match-button"); // Delete PL match button
const deleteSAMatchButton = document.getElementById("delete-sa-match-button"); // Delete SA match button

//////////     LALIGA CODE

//Function to add laliga matches to localstorage
function addllMatchToLocal(team1, team2) {
  // Retrieve existing matches from localStorage or initialize an empty array
  const llexistingMatches = JSON.parse(localStorage.getItem("matches")) || [];

  // Add the new match to the array
  llexistingMatches.push({ team1, team2 });

  // Store the updated array in localStorage
  localStorage.setItem("matches", JSON.stringify(llexistingMatches));
}

// Function to delete a match from localStorage laliga
function deleteMatchFromLocal(team1, team2) {
  // Retrieve existing matches from localStorage
  const existingMatches = JSON.parse(localStorage.getItem("matches")) || [];

  // Find the index of the match to delete
  const indexToDelete = existingMatches.findIndex(
    (match) => match.team1 === team1 && match.team2 === team2
  );

  if (indexToDelete !== -1) {
    // Remove the match from the array
    existingMatches.splice(indexToDelete, 1);

    // Store the updated array in localStorage
    localStorage.setItem("matches", JSON.stringify(existingMatches));

    // Remove the match from the football page
    const matchElements = document.querySelectorAll(".match");
    matchElements.forEach((matchElement) => {
      const homeTeam = matchElement.querySelector(".home p").textContent;
      const awayTeam = matchElement.querySelector(".away p").textContent;
      if (homeTeam === team1 && awayTeam === team2) {
        matchElement.remove();
      }
    });
  }
}
// Event handler for adding a match laliga
addllMatch.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the input values
  const team1 = team1Input.value;
  const team2 = team2Input.value;

  addllMatchToLocal(team1, team2);

  // Clear the input fields
  team1Input.value = "";
  team2Input.value = "";
});

// Event handler for deleting a match laliga
deleteMatchButton.addEventListener("click", function () {
  // Get the input values
  const team1 = team1Input.value;
  const team2 = team2Input.value;

  // Delete the match from localStorage and the football page
  deleteMatchFromLocal(team1, team2);

  team1Input.value = "";
  team2Input.value = "";
});

///////   PREMIER LEAGUE CODE

// Function to add a PL match to localStorage
function addPLMatchToLocal(team1, team2) {
  const existingPLMatches = JSON.parse(localStorage.getItem("plMatches")) || [];
  existingPLMatches.push({ team1, team2 });
  localStorage.setItem("plMatches", JSON.stringify(existingPLMatches));
}
// Function to delete a PL match from localStorage
function deletePLMatchFromLocal(team1, team2) {
  const existingPLMatches = JSON.parse(localStorage.getItem("plMatches")) || [];
  const indexToDelete = existingPLMatches.findIndex(
    (match) => match.team1 === team1 && match.team2 === team2
  );

  if (indexToDelete !== -1) {
    existingPLMatches.splice(indexToDelete, 1);
    localStorage.setItem("plMatches", JSON.stringify(existingPLMatches));

    // Remove the PL match from the football page
    const matchElements = document.querySelectorAll(".pl-match");
    matchElements.forEach((matchElement) => {
      const homeTeam = matchElement.querySelector(".home p").textContent;
      const awayTeam = matchElement.querySelector(".away p").textContent;
      if (homeTeam === team1 && awayTeam === team2) {
        matchElement.remove();
      }
    });
  }
}

// Event handler for adding a PL match
addPLMatch.addEventListener("submit", function (event) {
  event.preventDefault();
  const team1 = plTeam1Input.value;
  const team2 = plTeam2Input.value;
  addPLMatchToLocal(team1, team2);
  plTeam1Input.value = "";
  plTeam2Input.value = "";
});
// Event handler for deleting a PL match
deletePLMatchButton.addEventListener("click", function () {
  const team1 = plTeam1Input.value;
  const team2 = plTeam2Input.value;
  deletePLMatchFromLocal(team1, team2);
  plTeam1Input.value = "";
  plTeam2Input.value = "";
});



///////   SERIE A CODE

// Function to add a SA match to localStorage
function addSAMatchToLocal(team1, team2) {
  const existingSAMatches = JSON.parse(localStorage.getItem("saMatches")) || [];
  existingSAMatches.push({ team1, team2 });
  localStorage.setItem("saMatches", JSON.stringify(existingSAMatches));
}
// Function to delete a SA match from localStorage
function deleteSAMatchFromLocal(team1, team2) {
  const existingSAMatches = JSON.parse(localStorage.getItem("saMatches")) || [];
  const indexToDelete = existingSAMatches.findIndex(
    (match) => match.team1 === team1 && match.team2 === team2
  );

  if (indexToDelete !== -1) {
    existingSAMatches.splice(indexToDelete, 1);
    localStorage.setItem("saMatches", JSON.stringify(existingSAMatches));

    // Remove the PL match from the football page
    const matchElements = document.querySelectorAll(".sa-match");
    matchElements.forEach((matchElement) => {
      const homeTeam = matchElement.querySelector(".home p").textContent;
      const awayTeam = matchElement.querySelector(".away p").textContent;
      if (homeTeam === team1 && awayTeam === team2) {
        matchElement.remove();
      }
    });
  }
}

// Event handler for adding a SA match
addSAMatch.addEventListener("submit", function (event) {
  event.preventDefault();
  const team1 = saTeam1Input.value;
  const team2 = saTeam2Input.value;
  addSAMatchToLocal(team1, team2);
  saTeam1Input.value = "";
  saTeam2Input.value = "";
});
// Event handler for deleting a SA match
deleteSAMatchButton.addEventListener("click", function () {
  const team1 = saTeam1Input.value;
  const team2 = saTeam2Input.value;
  deleteSAMatchFromLocal(team1, team2);
  saTeam1Input.value = "";
  saTeam2Input.value = "";
});
