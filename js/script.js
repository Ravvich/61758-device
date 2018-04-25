

  var link = document.querySelector(".contacts__button");
  
  var popup = document.querySelector(".popup__contacts");
  var close = popup.querySelector(".popup__close");
  
  var script = document.querySelector("script");

  var button = document.querySelector(".nav__catalog");
  var catalog = document.querySelector(".catalog__column");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup__show");
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup__show");
  });

script.onload = function (evt) {
  catalog.classList.add("catalog__column-hide");
}

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    catalog.classList.toggle("catalog__column-hide");
  });