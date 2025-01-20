// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form validation
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (email === "" || message === "") {
      alert("Please fill in all fields.");
      event.preventDefault();
    }
  });
