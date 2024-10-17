// Select DOM elements using class selectors
const DOMSelectors = {
  gameInput: document.querySelector(".game-input"),
  characterInput: document.querySelector(".character-input"),
  imageInput: document.querySelector(".image-input"), // Image input
  container: document.querySelector(".card-container"),
  submitButton: document.querySelector(".submit-all"),
  previewImage: document.getElementById("previewImage"), // Image preview element
};

// Constructor function to create Hoyo objects with gameName, characterName, and imageURL
function createHoyo(game, character, imageURL) {
  return { game, character, imageURL, type: "Hoyo" };
}

// Function to insert a hoyo card into the DOM
function insertCard(hoyo) {
  const cardHTML = `
    <div class="card">
      <h2>${hoyo.type.toUpperCase()}</h2>
      <p><strong>Game:</strong> ${hoyo.game}</p>
      <p><strong>Character:</strong> ${hoyo.character}</p>
      <img src="${hoyo.imageURL}" alt="${
    hoyo.character
  } Image" class="card-image">
      <button class="remove-btn">Remove</button>
    </div>`;

  // Insert HTML at the end of the container
  DOMSelectors.container.insertAdjacentHTML("beforeend", cardHTML);
}

// Event listener for real-time image preview
DOMSelectors.imageInput.addEventListener("input", () => {
  const url = DOMSelectors.imageInput.value;
  if (isValidUrl(url)) {
    DOMSelectors.previewImage.src = url;
    DOMSelectors.previewImage.style.display = "block";
    DOMSelectors.previewImage.alt = "Image Preview";
  } else {
    DOMSelectors.previewImage.style.display = "none";
  }
});

// Add event listener to the submit button
DOMSelectors.submitButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get values from all the input fields
  const game = DOMSelectors.gameInput.value.trim();
  const character = DOMSelectors.characterInput.value.trim();
  const imageURL = DOMSelectors.imageInput.value.trim();

  console.log("Game:", game);
  console.log("Character:", character);
  console.log("Image URL:", imageURL);

  // Only add the card if all fields are filled and the image URL is valid
  if (game && character && imageURL && isValidUrl(imageURL)) {
    // Create a single hoyo object with all input values
    const hoyo = createHoyo(game, character, imageURL);
    console.log("Hoyo Object:", hoyo);

    // Insert one card with all the combined hoyo information
    insertCard(hoyo);

    // Clear the form inputs after submission
    DOMSelectors.gameInput.value = "";
    DOMSelectors.characterInput.value = "";
    DOMSelectors.imageInput.value = "";
    DOMSelectors.previewImage.style.display = "none"; // Hide image preview after submission
  } else {
    alert(
      "Please fill out all fields and enter a valid image URL before submitting."
    );
  }
});

// Event delegation to handle card removal
DOMSelectors.container.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-btn")) {
    event.target.parentElement.remove(); // Remove the card
  }
});

// Helper function to validate URLs
function isValidUrl(url) {
  try {
    new URL(url); // Standard MDN URL validation
    return true;
  } catch (_) {
    return false;
  }
}
