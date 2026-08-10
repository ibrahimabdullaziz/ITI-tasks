alert("--- Starting Task 8: Name Input ---");

var userName = "";

do {
  userName = prompt("Please enter your name:");
  if (userName !== null) {
    userName = userName.trim();
  }
} while (!userName);

alert("Hello, " + userName);
