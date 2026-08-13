document.getElementById("btn").onclick = function () {
  var win = window.open("", "", "width=400,height=400");

  if (!win) {
    alert("Please allow pop-ups");
    return;
  }
  var message =
    "HTTP (Hypertext Transfer Protocol) is an application-layer protocol " +
    "used for communication between web browsers and web servers. " +
    "It defines how clients and servers exchange requests and responses.";

  var i = 0;
  function typeMessage() {
    if (i < message.length) {
      win.document.body.innerHTML += message[i];
      i++;
      setTimeout(typeMessage, 100);
    }
  }
  typeMessage();
};
