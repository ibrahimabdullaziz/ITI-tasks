window.addEventListener("load", function () {
  var container1 = document.getElementById("container1");
  var container2 = document.getElementById("container2");
  var emptyMsg = document.getElementById("emptyMsg");

  let draggedImage;

  document.querySelectorAll("img").forEach(function (image) {
    image.addEventListener("dragstart", function (event) {
      draggedImage = event.target;
      draggedImage.classList.add("dragging");
    });

    image.addEventListener("dragend", function (event) {
      event.target.classList.remove("dragging");
      draggedImage = null;
    });
  });

  container2.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  container2.addEventListener("drop", function (event) {
    event.preventDefault();
    if (!draggedImage) return;
    container2.appendChild(draggedImage);
    if (!container1.querySelector("img")) {
      emptyMsg.classList.remove("hidden");
    }
  });
});
