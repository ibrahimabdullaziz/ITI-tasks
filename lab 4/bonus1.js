prompt('TASK 4 (BONUS 1): print "h" family');

var message = prompt("Enter a message:");

if (message !== null && message.trim() !== "") {
  for (var i = 1; i <= 6; i++) {
    document.write("<h" + i + ">" + message + "</h" + i + ">");
  }
} else {
  alert("Invalid message");
}
