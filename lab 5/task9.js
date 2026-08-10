alert("--- Starting Task 9: quiz game ---");

var score = 0;

var q1 = prompt("Q1: 5 + 6");
if (q1 !== null) {
  switch (q1.trim()) {
    case "11":
      score++;
      break;
  }
}

prompt("OK, now it will be harder!");
var q2 = prompt("Q2: 6 + 5");
if (q2 !== null) {
  switch (q2.trim().toLowerCase()) {
    case "11":
      score++;
      break;
  }
}

prompt("Be ready for the hardest one");
var q3 = prompt("Q3: 6 * 5");
if (q3 !== null) {
  switch (q3.trim().toLowerCase()) {
    case "30":
    case "js":
      score++;
      break;
  }
}

var resultMessage = "Your Score: " + score + " / 3 \n";

if (score >= 2) {
  resultMessage += "You passed!";
} else {
  resultMessage += "Try again!";
}

alert(resultMessage);
