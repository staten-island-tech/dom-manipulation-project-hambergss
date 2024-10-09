const DOMSelectors = {
  header: document.querySelector("h1"),
  items: document.querySelectorAll("li"),
  cardHeader: document.querySelector(".card-header"),
  button: document.querySelector("btn"),
  form: document.querySelectorAll(".form"),
  container: document.querySelector("container"),
};

DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.parentElement.style.backgroundColor = "red";
});
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector("input").value);
});

//select all buttons as nodelist (can use for each
const buttons = document.querySelectorAll("button");
//make array from buttons if i want to use filter etc.


//create the HTML for inputs, cards, and container aka where the cards go

//select/query the HTML form and get values from inputs

//turn values into object Movie, Game, User, Whatevers

//insert card with object onto HTML

//add event listener for remove button in JS