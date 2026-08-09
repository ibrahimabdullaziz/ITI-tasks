prompt("TASK 5 (BONUS 2): find sum");

var sum = 0;

while (true) {
  var input = prompt("Enter a number:");

  if (input === null) {
    break;
  }

  var num = Number(input);
  if (input.trim() === "" || isNaN(num)) {
    alert("Enter a valid number.");
    continue;
  }

  if (num === 0) {
    break;
  }

  sum += num;

  if (sum > 100) {
    break;
  }
}

alert("Total sum: " + sum);
