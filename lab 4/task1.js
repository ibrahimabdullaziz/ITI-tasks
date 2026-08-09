prompt("TASK 1 : summation of two numbers");

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

var sum = num1 + num2;

alert("The sum is: " + sum);
