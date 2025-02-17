document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name && email && message) {
      alert("Thank you, " + name + "! Your message has been sent.");
      document.getElementById("contactForm").reset();
  } else {
      alert("Please fill in all fields.");
  }
});
document.querySelectorAll(".contact-info p").forEach((item) => {
  item.addEventListener("click", function () {
      let text = this.innerText.split(": ")[1]; // Get the contact info text
      navigator.clipboard.writeText(text).then(() => {
          alert("Copied: " + text);
      });
  });
});
