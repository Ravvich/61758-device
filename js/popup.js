  var script = document.querySelector("popup");

  var button = document.querySelector(".nav__catalog");
  var catalog = document.querySelector(".catalog__column");


  script.onload = function (evt) {
    catalog.classList.add("catalog__column-hide");
};

  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    catalog.classList.toggle("catalog__column-hide");
  });