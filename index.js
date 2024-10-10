const DOMSelectors = {
  header: document.querySelector("h1"),
  items: document.querySelectorAll("li"),
  cardHeader: document.querySelector(".card-header"),
  button: document.querySelector(".btn"),
  form: document.querySelector("form"),
  container: document.querySelector("container"),
};

DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
});
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector("input").value);
});

//select all buttons as nodelist (can use for each
const buttons = document.querySelectorAll("button");
//make array from buttons if i want to use filter etc.
const newButtons = Array.from(buttons);
//iterate through array and change each button color
newButtons.forEach((button) => (button.style.backgroundColor = "#d1c4e9"));

newButtons.forEach((button) =>
  button.addEventListener("click", function (event) {})
);

DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<div class="card"><h2 class="card-header">${movie.title}}</h2></div>`
);

//create the HTML for inputs, cards, and container aka where the cards go

//select/query the HTML form and get values from inputs

//turn values into object Movie, Game, User, Whatevers

//insert card with object onto HTML

//add event listener for remove button in JS
