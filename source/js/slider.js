var slider = document.querySelector(".slider");
var btnBefore = slider.querySelector(".slider_button--past");
var btnAfter = slider.querySelector(".slider_button--present");
var slideBefore = slider.querySelector(".slider__image--before");
var slideAfter = slider.querySelector(".slider__image--after");
var bar = slider.querySelector(".slider__progress");

btnBefore.addEventListener("click", function(evt) {
  evt.preventDefault();
  slideAfter.classList.remove("slider__image--after-show");
  slideBefore.classList.add("slider__image--before-show");
  bar.classList.remove("slider__progress--after");
});

btnAfter.addEventListener("click", function(evt) {
  evt.preventDefault();
  slideBefore.classList.remove("slider__image--before-show");
  slideAfter.classList.add("slider__image--after-show");
  bar.classList.add("slider__progress--after");
});
