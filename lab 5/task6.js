alert("--- Starting Task 6: strong password ---");

var password = prompt("Enter a password:");

if (password === null || password.trim() === "") {
  alert("Weak password");
} else {
  var strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (strongPasswordRegex.test(password)) {
    alert("Strong password");
  } else {
    alert("Weak password");
  }
}
