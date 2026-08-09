prompt("TASK3 : locals");

var input = prompt("Enter a number:");

var num = Number(input);

if (input === null || input.trim() === "" || isNaN(num)) {
  alert("enter a valid number ");
}

var output =
  "US format: " +
  num.toLocaleString("en-US") +
  "\n\n" +
  "Egyptian format: " +
  num.toLocaleString("ar-EG");

alert(output);
