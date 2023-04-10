const form = document.querySelector("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const submitBtn = document.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") setErrorFor(username, "Username cannot be blank");
  if (usernameValue !== "") setSuccessFor(username, "Dobri podaci");

  if (emailValue === "") setErrorFor(email, "Email cannot be blank");
  if (emailValue !== "" && !isEmail(emailValue))
    setErrorFor(email, "Not a valid email");
  if (emailValue !== "" && isEmail(emailValue)) setSuccessFor(email);

  if (passwordValue === "") setErrorFor(password, "Password cannot be blank");
  if (passwordValue !== "") setSuccessFor(password);

  if (password2Value === "")
    setErrorFor(password2, "Password2 cannot be blank");
  if (password2Value !== "" && passwordValue !== password2Value)
    setErrorFor(password2, "Passwords does not match");
  if (password2Value !== "" && passwordValue === password2Value)
    setSuccessFor(password2);
}

function setErrorFor(input, message) {
  const formInput = input.parentElement;
  const errorEl = formInput.querySelector(".error-message");
  formInput.className = "form-input error";
  errorEl.innerText = message;
}

function setSuccessFor(input, message) {
  const formInput = input.parentElement;
  const successEl = formInput.querySelector(".success-message");
  formInput.className = "form-input success";
  successEl.innerText = message;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
