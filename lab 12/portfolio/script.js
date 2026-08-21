window.addEventListener("load", function () {
  var sendBtn = document.getElementById("sendBtn");

  sendBtn.addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    if (name === "" || message === "") {
      alert("Please fill in all fields.");
    } else {
      alert("Thank you, " + name + "! Your message has been received.");
      document.getElementById("contactForm").reset();
    }
  });
});
