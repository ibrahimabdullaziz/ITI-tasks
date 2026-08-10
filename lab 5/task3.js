alert("--- Starting Task 3: Favorite Color ---");

var colorInput = prompt("Enter your favorite color:");

if (colorInput === null || colorInput.trim() === "") {
  alert("Invalid input!");
} else {
  var color = colorInput.trim().toLowerCase();
  var message = "";

  switch (color) {
    case "blue":
      message = "Cool and calm choice!";
      break;
    case "red":
      message = "Bold and passionate!";
      break;
    case "green":
      message = "Fresh and lively!";
      break;
    default:
      message = "Interesting color!";
  }

  alert(message);
  console.log("Chosen Color:", color);
  console.log("Response:", message);
}
