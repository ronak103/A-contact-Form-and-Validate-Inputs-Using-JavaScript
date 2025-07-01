document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Input Fields
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Error Elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isValid = true;

  // Clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  // Validate Name
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  // Validate Email
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailRegex.test(email.value.trim())) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  }

  // Validate Message
  if (message.value.trim() === "") {
    messageError.textContent = "Message cannot be empty.";
    isValid = false;
  }

  // If valid, show success message
  if (isValid) {
    successMessage.textContent = "Form submitted successfully!";
    name.value = "";
    email.value = "";
    message.value = "";
  }
});
