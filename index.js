const DOMSelectors = {
  header: document.querySelector("h1"),
  items: document.querySelectorAll("li"),
  cardHeader: document.querySelector(".card-header"),
  button: document.querySelector("btn"),
  form: document.querySelector(".form"),
};
let student = {
  name: "Ryan",
  age: 15,
  girlfriend: true,
};

DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.parentElement.style.backgroundColor = "red";
});
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  document.querySelector("input").value;
});
