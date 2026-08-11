alert("--- Array Duplicate Checker ---");

var input = prompt("Enter array Values (comma separated):");

if (input !== null && input.trim() !== "") {
  var rawValues = input.split(",");
  var values = [];

  for (var i = 0; i < rawValues.length; i++) {
    values.push(rawValues[i].trim());
  }

  var tableHTML = "<table border='1' cellpadding='5'><tr><th>Values</th></tr>";
  for (var j = 0; j < values.length; j++) {
    tableHTML += "<tr><td>" + values[j] + "</td></tr>";
  }
  tableHTML += "</table><br>";

  document.write(tableHTML);

  var seen = {};
  var duplicates = [];

  for (var k = 0; k < values.length; k++) {
    var val = values[k];
    if (seen[val]) {
      duplicates.push("row number " + (k + 1));
    } else {
      seen[val] = true;
    }
  }

  if (duplicates.length > 0) {
    var errorMsg = "repeated " + duplicates.join("<br>");
    document.write(errorMsg);
  }
}
