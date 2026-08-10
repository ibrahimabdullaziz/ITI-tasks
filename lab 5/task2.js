alert("--- Starting Task 2:price discount  ---");

var isMemberInput = prompt("Are you a member? (yes or no):");

if (isMemberInput === null || isMemberInput.trim() === "") {
  alert("Invalid input!");
} else {
  var answer = isMemberInput.trim().toLowerCase();

  var originalPrice = 200;
  var discount = answer === "yes" ? 0.25 : 0.1;

  var finalPrice = originalPrice - originalPrice * discount;

  alert("Final Price: $" + finalPrice);
  console.log("Member Status:", answer);
  console.log("Discount Applied:", discount * 100 + "%");
  console.log("Final Price:", "$" + finalPrice);
}
