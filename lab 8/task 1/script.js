document.getElementById("btn").onclick = function () {
  var win = window.open("", "", "width=400,height=400");

  if (!win) {
    alert("Please allow pop-ups!");
    return;
  }

  var text =
    "<p>HTTP (Hypertext Transfer Protocol) is an application-layer protocol used for communication between web browsers and web servers.</p>" +
    "<p>When you enter a URL, the browser sends an HTTP request to a web server, and the server sends back an HTTP response containing the requested content.</p>" +
    "<p>HTTP methods include GET, POST, PUT, PATCH, and DELETE. HTTP status codes indicate whether a request succeeded, was redirected, or failed.</p>" +
    "<p>HTTPS is the secure version of HTTP and uses TLS to encrypt communication between the browser and server.</p><hr>";

  var htmlContent =
    "<body style='background-color:#e8e377; color:black;'>" +
    text.repeat(6) +
    "</body>";

  win.document.write(htmlContent);

  var lastScroll = -1;
  var timer = setInterval(function () {
    if (win.closed) {
      clearInterval(timer);
      return;
    }

    win.scrollBy(0, 5);
    var currentScroll = win.pageYOffset;

    if (currentScroll === lastScroll) {
      clearInterval(timer);
      win.close();
      return;
    }

    lastScroll = currentScroll;
  }, 30);
};
