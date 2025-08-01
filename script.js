// Simple JavaScript for interactive elements

// Add a print function
function printCV() {
  window.print();
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add a simple animation to sections when they come into view
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(section);
  });

  // Add current year to footer if needed
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Save preference to localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

// Check for saved dark mode preference
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
});

// Add a simple contact form validation (if form is added later)
function validateContactForm() {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (!name || !email || !message) {
        alert("Please fill in all fields");
        e.preventDefault();
        return false;
      }

      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        e.preventDefault();
        return false;
      }

      return true;
    });
  }
}
