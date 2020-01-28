var fat_left = document.getElementById("fat-left");
var fat_right = document.getElementById("fat-right");
var slim_left = document.getElementById("slim-left");
var slim_right = document.getElementById("slim-right");
var expample_range = document.getElementById("expample_range");

document.getElementById("expample_range").addEventListener("change", function() {
  if(this.value == 1){
    fat_left.classList.remove("jshidden");
    fat_right.classList.remove("jshidden");
    slim_left.classList.add("jshidden");
    slim_right.classList.add("jshidden");
  }
  if(this.value == 2){
    slim_right.classList.remove("jshidden");
    slim_left.classList.remove("jshidden");
    fat_right.classList.add("jshidden");
    fat_left.classList.add("jshidden");
  }
});

if (window.matchMedia("(min-width: 768px)").matches) {
  fat_left.classList.remove("jshidden");
  fat_right.classList.add("jshidden");
  slim_left.classList.add("jshidden");
  slim_right.classList.remove("jshidden");
  expample_range.setAttribute("max", "3");
  expample_range.setAttribute("value", "2");

  document.getElementById("expample_range").addEventListener("change", function() {
    if(this.value == 1){
      fat_left.classList.remove("jshidden");
      fat_right.classList.remove("jshidden");
      slim_left.classList.add("jshidden");
      slim_right.classList.add("jshidden");
    }
    if(this.value == 2){
      slim_left.classList.add("jshidden");
      fat_right.classList.add("jshidden");
      fat_left.classList.remove("jshidden");
      slim_right.classList.remove("jshidden");
    }
    if(this.value == 3){
      slim_right.classList.remove("jshidden");
      slim_left.classList.remove("jshidden");
      fat_right.classList.add("jshidden");
      fat_left.classList.add("jshidden");
    }
  });
};
