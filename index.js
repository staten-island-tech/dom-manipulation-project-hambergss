const DOMSelectors = {
  header: document.querySelector("h1"),
  items: document.querySelectorAll("li"),
  cardHeader: document.querySelector(".card-header"),
  forms: document.querySelectorAll(".form"),
};

DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
});
DOMSelectors.forms.addEventListener("submit", function (event) {
  event.preventDefault();
  document.querySelector("input").value;
});
