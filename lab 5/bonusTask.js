alert("--- Starting Task 10: Name Analyzer ---");

function analyzeName() {
  var nameInput = prompt("Please enter your name:");

  if (nameInput === null || nameInput.trim() === "") {
    alert("Name cannot be empty.");
    return;
  }

  var trimmedName = nameInput.trim();
  var firstLetter = trimmedName.charAt(0).toUpperCase();
  var nameLength = trimmedName.length;
  var lastLetter = trimmedName.charAt(nameLength - 1).toUpperCase();
  var allCaps = trimmedName.toUpperCase();
  var lowerCase = trimmedName.toLowerCase();

  var resultMessage =
    "Name: " +
    trimmedName +
    "\n" +
    "First Letter: " +
    firstLetter +
    "\n" +
    "Length: " +
    nameLength +
    "\n" +
    "Last Letter: " +
    lastLetter +
    "\n" +
    "ALL CAPS: " +
    allCaps +
    "\n" +
    "Lowercase: " +
    lowerCase;

  alert(resultMessage);

  console.log("Original Input:", nameInput);
  console.log("Analyzed Name:", trimmedName);
  console.log("First Letter:", firstLetter);
  console.log("Length:", nameLength);
  console.log("Last Letter:", lastLetter);
  console.log("ALL CAPS:", allCaps);
  console.log("Lowercase:", lowerCase);
}

analyzeName();
