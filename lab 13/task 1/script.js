window.addEventListener("load", function () {
  var box = document.getElementById("box");
  var startBtn = document.getElementById("startBtn");
  var stopBtn = document.getElementById("stopBtn");
  var pauseBtn = document.getElementById("pauseBtn");

  startBtn.addEventListener("click", function () {
    box.classList.remove("paused");
    box.classList.add("running");
  });

  pauseBtn.addEventListener("click", function () {
    box.classList.add("paused");
  });

  stopBtn.addEventListener("click", function () {
    box.classList.remove("running", "paused");
  });
});
