var menu = document.querySelector(".main-nav");
var toggle = menu.querySelector(".main-nav__toggle");

if (menu) {
  menu.classList.remove("main-nav--opened");
  menu.classList.add("main-nav--closed");
};

toggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("main-nav--opened");
  menu.classList.toggle("main-nav--closed");
});
