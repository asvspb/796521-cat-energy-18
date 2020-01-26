var fat_left = document.getElementById("fat-left");
var fat_right = document.getElementById("fat-right");
var slim_left = document.getElementById("slim-left");
var slim_right = document.getElementById("slim-right");
var example_toggle = document.getElementById("example_toggle");

document.getElementById("expample_range").addEventListener("change", function() {
  if(this.value == 1){
    fat_left.classList.remove("jshidden");
    fat_right.classList.remove("jshidden");
    slim_left.classList.add("jshidden");
    slim_right.classList.add("jshidden");

    example_toggle.style.width = "0";
  }
  if(this.value == 2){
    slim_left.classList.add("jshidden");
    fat_right.classList.add("jshidden");
    fat_left.classList.remove("jshidden");
    slim_right.classList.remove("jshidden");

    example_toggle.style.width = "calc(50% - 6px)";
  }
  if(this.value == 3){
    slim_right.classList.remove("jshidden");
    slim_left.classList.remove("jshidden");
    fat_right.classList.add("jshidden");
    fat_left.classList.add("jshidden");

    example_toggle.style.width = "calc(100% - 12px)";
  }
});
