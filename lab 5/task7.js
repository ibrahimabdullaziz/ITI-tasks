alert("--- Starting Task 7: display even numbers in a table ---");

var evenNumbers = [];

for (var i = 1; i <= 30; i++) {
  if (i % 2 === 0) {
    evenNumbers.push(i);
  }
}

var tableHTML = "<table border='1' cellpadding='8' cellspacing='0'><tr>";

for (var j = 0; j < evenNumbers.length; j++) {
  tableHTML += "<td>" + evenNumbers[j] + "</td>";

  if ((j + 1) % 5 === 0 && j + 1 !== evenNumbers.length) {
    tableHTML += "</tr><tr>";
  }
}

tableHTML += "</tr></table>";

document.write(tableHTML);
