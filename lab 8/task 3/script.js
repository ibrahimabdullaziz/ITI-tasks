document.getElementById("register").onclick = function () {
  var name = document.getElementById("name").value;
  var gender = document.getElementById("male").checked ? "male" : "female";
  var color = document.getElementById("color").value;

  var photo;
  if (gender == "male") {
    photo = "male.jpg";
  } else {
    photo = "female.jpg";
  }

  document.getElementById("form").style.display = "none";

  document.getElementById("result").innerHTML =
    "<h1 style='color:" +
    color +
    "'>Hi " +
    name +
    "</h1>" +
    "<img src='" +
    photo +
    "' width='250'>";
};
