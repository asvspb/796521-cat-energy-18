var submitForm = document.getElementById("submitForm");
var required = document.querySelectorAll(".required");

submitForm.addEventListener("click", function () {
  for (var i = 0; i < required.length; i++) {
    if (!required[i].value) {
      required[i].classList.add("error");
      window.scrollTo(required[i]);
    }
  }
});

for (var i = 0; i < required.length; i++) {
  required[i].addEventListener("input", function () {
    this.classList.remove("error");
  })
};
