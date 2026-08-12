var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
var currentIndex = 0;

var slideImg = document.getElementById("slideImg");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  slideImg.src = images[currentIndex];
});

prevBtn.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  slideImg.src = images[currentIndex];
});
