const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];

  if (password.value.length <= 6) {
    messages.push("Password must be longer than 6 characters");
  }
  if (password.value.length >= 16) {
    messages.push("Password must be less than 16 characters");
  }
  if (password.value === "password") {
    messages.push("Password cannot be Password");
  }
  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join("");
  }
});
