// Part 1: Event Handling
const clickBtn = document.getElementById("clickBtn");
const message = document.getElementById("message");

clickBtn.addEventListener("click", () => {
  message.textContent = "📢 MK Construction has launched a new apartment project in Nairobi!";
});

// Part 2: Interactive Elements

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Project Counter
let count = 5;
const countDisplay = document.getElementById("count");
document.getElementById("increment").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("decrement").addEventListener("click", () => {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }
});

// FAQ Section (toggle answers)
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// Part 3: Form Validation
const form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent submission

  let valid = true;

  // Get inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const project = document.getElementById("project").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const projectError = document.getElementById("projectError");
  const passwordError = document.getElementById("passwordError");

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  projectError.textContent = "";
  passwordError.textContent = "";

  // Validate name
  if (name === "") {
    nameError.textContent = "Name is required";
    valid = false;
  }

  // Validate email (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  }

  // Validate project field
  if (project === "") {
    projectError.textContent = "Please specify your project type";
    valid = false;
  }

  // Validate password (min 6 chars)
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  }

  // Final message
  if (valid) {
    document.getElementById("formMessage").textContent =
      "✅ Thank you for reaching out! Our team will contact you shortly.";
  } else {
    document.getElementById("formMessage").textContent =
      "❌ Please correct the errors above.";
  }
});
