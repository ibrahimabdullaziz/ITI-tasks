alert("--- Starting Task 1: Age ---");

var ageInput = prompt("Please enter your age:");

if (ageInput === null || ageInput.trim() === "") {
  alert("Invalid input");
} else {
  var age = Number(ageInput);

  if (isNaN(age) || age < 0) {
    alert("Please enter a valid non-negative number");
  } else if (age < 13) {
    alert("You are too young to access this site");
  } else if (age >= 13 && age <= 17) {
    alert("Parental guidance is advised");
  } else {
    alert("Access granted");
  }
}
