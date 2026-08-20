window.addEventListener("load", function () {
  let video = document.getElementById("myVideo");

  let playBtn = document.getElementById("playBtn");
  let pauseBtn = document.getElementById("pauseBtn");
  let stopBtn = document.getElementById("stopBtn");
  let muteBtn = document.getElementById("muteBtn");
  let loopBtn = document.getElementById("loopBtn");
  let fullscreenBtn = document.getElementById("fullscreenBtn");

  let volumeSlider = document.getElementById("volumeSlider");
  let progressSlider = document.getElementById("progressSlider");

  let currentTimeDisplay = document.getElementById("currentTime");
  let durationDisplay = document.getElementById("duration");

  let speedParent = document.getElementById("speedParent");
  let sizeParent = document.getElementById("sizeParent");

  playBtn.addEventListener("click", function () {
    video.play();
  });

  pauseBtn.addEventListener("click", function () {
    video.pause();
  });

  stopBtn.addEventListener("click", function () {
    video.pause();
    video.currentTime = 0;
  });

  muteBtn.addEventListener("click", function () {
    video.muted = !video.muted;
  });

  loopBtn.addEventListener("click", function () {
    video.loop = !video.loop;
  });

  fullscreenBtn.addEventListener("click", function () {
    video.requestFullscreen();
  });

  speedParent.addEventListener("click", function (e) {
    if (e.target.type === "button") {
      let val = e.target.value;
      if (val === "0.5x") video.playbackRate = 0.5;
      if (val === "1x") video.playbackRate = 1.0;
      if (val === "2x") video.playbackRate = 2.0;
    }
  });

  sizeParent.addEventListener("click", function (e) {
    if (e.target.type === "button") {
      let val = e.target.value;
      if (val === "Small") {
        video.width = 400;
      }
      if (val === "Medium") {
        video.width = 600;
      }
      if (val === "Large") {
        video.width = 800;
      }
    }
  });

  volumeSlider.addEventListener("input", function () {
    video.volume = volumeSlider.value;
  });

  function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    if (secs < 10) secs = "0" + secs;
    if (mins < 10) mins = "0" + mins;
    return mins + ":" + secs;
  }

  video.addEventListener("loadedmetadata", function () {
    progressSlider.max = video.duration;
    durationDisplay.innerText = formatTime(video.duration);
  });

  video.addEventListener("timeupdate", function () {
    progressSlider.value = video.currentTime;
    currentTimeDisplay.innerText = formatTime(video.currentTime);
  });

  progressSlider.addEventListener("input", function () {
    video.currentTime = progressSlider.value;
  });
});
