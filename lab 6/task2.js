alert("--- Array Operations ---");

var repeatProgram = false;

do {
  var sizeInput;
  var size;
  do {
    sizeInput = prompt("Enter the size of the array:");
    if (sizeInput === null) break;

    size = Number(sizeInput.trim());
    if (
      sizeInput.trim() === "" ||
      isNaN(size) ||
      size <= 0 ||
      !Number.isInteger(size)
    ) {
      alert("Please enter a valid positive integer for the size!");
    }
  } while (
    sizeInput.trim() === "" ||
    isNaN(size) ||
    size <= 0 ||
    !Number.isInteger(size)
  );

  if (sizeInput === null) break;

  var numbers = [];
  for (var i = 0; i < size; i++) {
    var numInput;
    var num;
    do {
      numInput = prompt("Enter element [" + (i + 1) + " of " + size + "]:");
      if (numInput === null) break;

      num = Number(numInput.trim());
      if (numInput.trim() === "" || isNaN(num)) {
        alert("Please enter a valid number.");
      }
    } while (numInput.trim() === "" || isNaN(num));

    if (numInput === null) break;
    numbers.push(num);
  }

  if (numbers.length < size) {
    alert("Operation canceled.");
    break;
  }

  var choice;
  var validChoices = ["a", "b", "c", "d", "e", "f", "g", "h"];

  do {
    choice = prompt(
      "Choose an operation:\n" +
        "a : Display array in original order\n" +
        "b : Display array in ascending order\n" +
        "c : Display array in descending order\n" +
        "d : Display reversed version of original array\n" +
        "e : Display even numbers only\n" +
        "f : Display numbers divisible by a given number\n" +
        "g : Display new array with 30% discount\n" +
        "h : Display numbers joined with ***",
    );

    if (choice === null) break;

    choice = choice.trim().toLowerCase();
    if (validChoices.indexOf(choice) === -1) {
      alert("Invalid choice! Please select a letter from a to h.");
    }
  } while (validChoices.indexOf(choice) === -1);

  if (choice === null) break;

  switch (choice) {
    case "a":
      alert("Original Order:\n[" + numbers.join(", ") + "]");
      break;

    case "b":
      var sortedAsc = numbers.slice().sort(function (a, b) {
        return a - b;
      });
      alert("Ascending Order:\n[" + sortedAsc.join(", ") + "]");
      break;

    case "c":
      var sortedDesc = numbers.slice().sort(function (a, b) {
        return b - a;
      });
      alert("Descending Order:\n[" + sortedDesc.join(", ") + "]");
      break;

    case "d":
      var reversedArr = numbers.slice().reverse();
      alert("Reversed Array:\n[" + reversedArr.join(", ") + "]");
      break;

    case "e":
      var evens = [];
      for (var j = 0; j < numbers.length; j++) {
        if (numbers[j] % 2 === 0) {
          evens.push(numbers[j]);
        }
      }

      if (evens.length > 0) {
        alert("Even Numbers:\n[" + evens.join(", ") + "]");
      } else {
        alert("No even numbers found in the array!");
      }
      break;

    case "f":
      var divisorInput;
      var divisor;
      do {
        divisorInput = prompt("Enter a number to check divisibility:");
        if (divisorInput === null) break;

        divisor = Number(divisorInput.trim());
        if (divisorInput.trim() === "" || isNaN(divisor) || divisor === 0) {
          alert("Please enter a valid non-zero number!");
        }
      } while (divisorInput.trim() === "" || isNaN(divisor) || divisor === 0);

      if (divisorInput !== null) {
        var divisibleNumbers = [];
        for (var k = 0; k < numbers.length; k++) {
          if (numbers[k] % divisor === 0) {
            divisibleNumbers.push(numbers[k]);
          }
        }

        if (divisibleNumbers.length > 0) {
          alert(
            "Numbers divisible by " +
              divisor +
              ":\n[" +
              divisibleNumbers.join(", ") +
              "]",
          );
        } else {
          alert("No numbers found that are divisible by " + divisor + "!");
        }
      }
      break;

    case "g":
      var discounted = [];
      for (var l = 0; l < numbers.length; l++) {
        discounted.push(numbers[l] * 0.7);
      }
      alert("Array with 30% discount:\n[" + discounted.join(", ") + "]");
      break;

    case "h":
      var concatenatedString = numbers.join("***");
      alert("Concatenated String:\n" + concatenatedString);
      break;
  }

  var confirmRepeat = confirm("Do you want to repeat running the program?");
  repeatProgram = confirmRepeat;
} while (repeatProgram);

alert("Program finished!");
