alert("--- Starting Task 4: Login ---");

var usernameInput = prompt("Enter username:");
var passwordInput = prompt("Enter password:");

if (
  usernameInput === null ||
  passwordInput === null ||
  usernameInput.trim() === "" ||
  passwordInput.trim() === ""
) {
  alert("All fields are required");
} else if (
  usernameInput.trim() === "admin" &&
  passwordInput.trim() === "1234"
) {
  alert("Welcome back, admin!");
} else {
  alert("Incorrect credentials.");
}
