prompt("TASK 2 : comparison");

var input1 = prompt("Enter the first number:");
var input2 = prompt("Enter the second number:");

var num1 = Number(input1);
var num2 = Number(input2);

if (
  input1 === null ||
  input2 === null ||
  input1.trim() === "" ||
  input2.trim() === "" ||
  isNaN(num1) ||
  isNaN(num2)
) {
  alert("Enter valid numbers.");
}

var result = "";

if (num1 > num2) {
  result = num1 + " is greater than " + num2;
} else if (num1 < num2) {
  result = num1 + " is less than " + num2;
} else {
  result = num1 + " is equal to " + num2;
}

alert(result);

console.log("first number: ", num1);
console.log("second number:", num2);
console.log("is first > second: ", num1 > num2);
console.log("is first < second: ", num1 < num2);
console.log("is first == second: ", num1 == num2);
console.log("result: ", result);
