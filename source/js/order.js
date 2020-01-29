var button_checkout = document.querySelectorAll(".button--checkout");
var order = document.querySelector(".order");
var close_order = document.getElementById("close_order");

for (var i = 0; i < button_checkout.length; i++) {
  button_checkout[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    order.classList.remove("hidden")
  })
};

close_order.addEventListener("click", function () {
  order.classList.add("hidden")
});
