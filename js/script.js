

  var link = document.querySelector(".contacts__button");
  var popup = document.querySelector(".popup__contacts");
  var close = popup.querySelector(".popup__close");
  
  var script = document.querySelector("script");
  var button = document.querySelector(".nav__catalog");
  var catalog = document.querySelector(".catalog__column");

  var show1 = document.querySelector(".promo__label-slide1");
  var show2 = document.querySelector(".promo__label-slide2");
  var show3 = document.querySelector(".promo__label-slide3");

  var slide1 = document.querySelector(".slide1");
  var slide2 = document.querySelector(".slide2");
  var slide3 = document.querySelector(".slide3");



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

show2.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide2.classList.add("slide__show");
    slide1.classList.remove("slide__show");
    slide3.classList.remove("slide__show");
  });

show3.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide3.classList.add("slide__show");
    slide1.classList.remove("slide__show");
    slide2.classList.remove("slide__show");
  });

show1.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide1.classList.add("slide__show");
    slide2.classList.remove("slide__show");
    slide3.classList.remove("slide__show");
  });














