var text = document.getElementById("targetText");
var controls = document.getElementById("controls");

controls.addEventListener("change", function (e) {
  if (e.target.name) {
    text.style[e.target.name] = e.target.value;
  }
});
