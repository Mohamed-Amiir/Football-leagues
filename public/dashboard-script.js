// // Get references to HTML elements

// const matchesContainer = document.getElementById("laliga");
// const addMatchForm = document.getElementById("add-match-form");
// const team1Input = document.getElementById("team1");
// const team2Input = document.getElementById("team2");

// // Event handler for adding a match
// addMatchForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   // Get the input values
//   const team1 = team1Input.value;
//   const team2 = team2Input.value;

//   // Create a new match element
//   const matchElement = document.createElement("div");
//   matchElement.className = "match";
//   matchElement.innerHTML = `
//   <div class="l-logo">
//       <img src="/Logos/Laliga/newLiga.ico" alt="laliga" />
//   </div>
//   <div class="home">
//       <div class="team-name">
//           <p>${team1}</p>
//       </div>
//       <div class="team">
//           <img src="/Logos/Laliga/Teams/${team1.toLowerCase()}.png" alt="${team1}" />
//       </div>
//   </div>
//   <div class="vs">
//       <p>VS</p>
//   </div>
//   <div class="away">
//       <div class="team">
//           <img src="/Logos/Laliga/Teams/${team2.toLowerCase()}.png" alt="${team2}" />
//       </div>
//       <div class="team-name">
//           <p>${team2}</p>
//       </div>
//   </div>

// `;

//   // Append the match element to the container
//   matchesContainer.appendChild(matchElement);

//   // Clear the input fields
//   team1Input.value = "";
//   team2Input.value = "";
// });

// Remove the module.exports from this file, as it's not needed for this task.
const addMatchForm = document.getElementById("add-match-form");
const team1Input = document.getElementById("team1");
const team2Input = document.getElementById("team2");

// Event handler for adding a match
// Event handler for adding a match
addMatchForm.addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Get the input values
    const team1 = team1Input.value;
    const team2 = team2Input.value;
  
    // Retrieve existing matches from localStorage or initialize an empty array
    const existingMatches = JSON.parse(localStorage.getItem("matches")) || [];
  
    // Add the new match to the array
    existingMatches.push({ team1, team2 });
  
    // Store the updated array in localStorage
    localStorage.setItem("matches", JSON.stringify(existingMatches));
  
    // Clear the input fields
    team1Input.value = "";
    team2Input.value = "";
  });
  

