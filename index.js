// Select DOM elements using class selectors
const DOMSelectors = {
  gameInput: document.querySelector(".game-input"),
  characterInput: document.querySelector(".character-input"),
  container: document.querySelector(".card-container"),
  submitButton: document.querySelector(".submit-all"),
};

// Constructor function to create Hoyo objects with gameName and characterName
function createHoyo(game, character) {
  return { game, character, type: "Hoyo" };
}

// Function to insert a hoyo card into the DOM
function insertCard(hoyo) {
  const cardHTML = `
    <div class="card">
      <h2>${hoyo.type.toUpperCase()}</h2>
      <p><strong>Game:</strong> ${hoyo.game}</p>
      <p><strong>Character:</strong> ${hoyo.character}</p>
      <button class="remove-btn">Remove</button>
    </div>`;

  DOMSelectors.container.insertAdjacentHTML("beforeend", cardHTML);
}

// Add event listener to the submit button
DOMSelectors.submitButton.addEventListener("click", function () {
  // Get values from all the input fields
  const game = DOMSelectors.gameInput.value;
  const character = DOMSelectors.characterInput.value;

  // Only add the card if all fields are filled
  if (game && character) {
    // Create a single hoyo object with all input values
    const hoyo = createHoyo(game, character);

    // Insert one card with all the combined hoyo information
    insertCard(hoyo);

    // Clear the form inputs after submission
    DOMSelectors.gameInput.value = "";
    DOMSelectors.characterInput.value = "";
  } else {
    alert("Please fill out all fields before submitting.");
  }
});

// Event delegation to handle card removal
DOMSelectors.container.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-btn")) {
    event.target.parentElement.remove(); // Remove the card
  }
});
