var fat_left = document.getElementById("fat-left");
var fat_right = document.getElementById("fat-right");
var slim_left = document.getElementById("slim-left");
var slim_right = document.getElementById("slim-right");
var after_mobile = document.getElementById("after-mobile");
var before_mobile = document.getElementById("before-mobile");

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

document.getElementById("example_mobile_range").addEventListener("change", function() {
  if(this.value == 1){
    before_mobile.classList.remove("jshidden");
    after_mobile.classList.add("jshidden");
  }
  if(this.value == 2){
    after_mobile.classList.remove("jshidden");
    before_mobile.classList.add("jshidden");
  }
})
