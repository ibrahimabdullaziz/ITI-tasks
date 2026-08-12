var card = document.getElementById("card");
var userName = document.getElementById("userName");
var hobbiesList = document.getElementById("hobbiesList");

var editBtn = document.getElementById("editBtn");
var colorBtn = document.getElementById("colorBtn");
var hobbyBtn = document.getElementById("hobbyBtn");

editBtn.addEventListener("click", function () {
  var newName = prompt("Enter new name:");
  if (newName && newName.trim() !== "") {
    userName.innerText = newName;
  }
});

colorBtn.addEventListener("click", function () {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  var randomColor = "rgb(" + r + ", " + g + ", " + b + ")";
  card.style.backgroundColor = randomColor;
});

hobbyBtn.addEventListener("click", function () {
  var newHobby = prompt("Enter new hobby:");
  if (newHobby && newHobby.trim() !== "") {
    var div = document.createElement("div");
    div.innerText = newHobby;
    hobbiesList.appendChild(div);
  }
});
