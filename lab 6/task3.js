alert("--- Inventory Management System ---");

var count;
do {
  count = Number(prompt("How many products do you want to add? (Minimum 3):"));
  if (isNaN(count) || count < 3 || !Number.isInteger(count)) {
    alert("Please enter a valid integer number (at least 3)!");
  }
} while (isNaN(count) || count < 3 || !Number.isInteger(count));

var inventory = [];
var totalInventoryValue = 0;

for (var i = 0; i < count; i++) {
  alert("Entering details for Product #" + (i + 1));

  var pName;
  do {
    pName = prompt("Enter product name:");
    if (pName === null || pName.trim() === "") {
      alert("Product name cannot be empty!");
    }
  } while (pName === null || pName.trim() === "");

  var pQuantity;
  do {
    pQuantity = Number(prompt("Enter quantity for " + pName + ":"));
    if (isNaN(pQuantity) || pQuantity < 0 || !Number.isInteger(pQuantity)) {
      alert("Quantity must be an integer greater than or equal to 0!");
    }
  } while (isNaN(pQuantity) || pQuantity < 0 || !Number.isInteger(pQuantity));

  var pPrice;
  do {
    pPrice = Number(prompt("Enter price for " + pName + ":"));
    if (isNaN(pPrice) || pPrice < 0) {
      alert("Price must be a number greater than or equal to 0!");
    }
  } while (isNaN(pPrice) || pPrice < 0);

  // Calculate Total Value & Store Object in Array
  var itemTotal = pQuantity * pPrice;
  totalInventoryValue += itemTotal;

  var productObj = {
    name: pName.trim(),
    quantity: pQuantity,
    price: pPrice,
    total: itemTotal,
  };

  inventory.push(productObj);
}

var htmlOutput = "<h2>Inventory Table</h2>";
htmlOutput += "<table border='1' cellpadding='8' cellspacing='0'>";
htmlOutput +=
  "<tr><th>Name</th><th>Quantity</th><th>Price</th><th>Total Value</th></tr>";

for (var j = 0; j < inventory.length; j++) {
  htmlOutput +=
    "<tr>" +
    "<td>" +
    inventory[j].name +
    "</td>" +
    "<td>" +
    inventory[j].quantity +
    "</td>" +
    "<td>$" +
    inventory[j].price +
    "</td>" +
    "<td>$" +
    inventory[j].total +
    "</td>" +
    "</tr>";
}
htmlOutput += "</table>";

htmlOutput += "<h3>Total Inventory Value: $" + totalInventoryValue + "</h3>";

document.write(htmlOutput);
