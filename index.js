const form = document.querySelector(".form"),
  submitBtn = document.querySelector("button"),
  customerName = document.getElementById("customerName"),
  customerEmail = document.getElementById("customerEmail"),
  customerAddress = document.getElementById("customerAddress"),
  customerHomeNumber = document.getElementById("customerHomeNumber"),
  customerZipcode = document.getElementById("customerZipcode"),
  customerPhoneNumber = document.getElementById("customerPhoneNumber"),
  customerLocation = document.getElementById("customerLocation"),
  customerSpecialIntructions = document.getElementById(
    "customerSpecialIntructions"
  );

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function validateInput(
  inputValue,
  errorMessage,
  inputElement,
  validationFunction,
  validationErrorMessage
) {
  if (inputValue === "") {
    displayError(inputElement, errorMessage);
  } else if (validationFunction && !validationFunction(inputValue)) {
    displayError(inputElement, validationErrorMessage || errorMessage);
  } else {
    displaySuccess(inputElement);
  }
}

function displayError(input, message) {
  const formInput = input.parentElement;
  const errorEl = formInput.querySelector(".error-message");
  formInput.className = "form-input error";
  errorEl.innerText = message;
}

function displaySuccess(input) {
  const formInput = input.parentElement;
  formInput.className = "form-input success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function checkInputs() {
  const nameValue = customerName.value.trim(),
    addressValue = customerAddress.value.trim(),
    homeNumberValue = customerHomeNumber.value.trim(),
    zipcodeValue = customerZipcode.value.trim(),
    locationValue = customerLocation.value.trim(),
    emailValue = customerEmail.value.trim(),
    specialInstructions = customerSpecialIntructions.value.trim(),
    phoneNumberValue = customerPhoneNumber.value
      .trim()
      .replaceAll(" ", "")
      .replaceAll("-", "");

  validateInput(nameValue, "Molimo unesite ime i prezime", customerName);

  validateInput(
    phoneNumberValue,
    "Molimo unesite telefonski broj",
    customerPhoneNumber,
    (phoneNumber) => phoneNumber.length >= 9,
    "Broj mora sadržati najmanje 9 brojeva"
  );

  validateInput(
    addressValue,
    "Molimo unesite adresu stanovanja",
    customerAddress
  );

  validateInput(
    homeNumberValue,
    "Molimo unesite kućni broj",
    customerHomeNumber,
    (number) => +number > 0,
    "Broj more biti veći od 0"
  );

  validateInput(
    zipcodeValue,
    "Molimo unesite poštanski broj",
    customerZipcode,
    (number) => +number > 0,
    "Broj more biti veći od 0"
  );

  validateInput(locationValue, "Molimo unesite mjesto", customerLocation);

  validateInput(
    emailValue,
    "Molimo unesite email adresu",
    customerEmail,
    isEmail,
    "Molimo unesite ispravnu email adresu"
  );

  const formInputs = document.querySelectorAll(".form-input");
  let isValid = true;
  formInputs.forEach((input) => {
    if (input.classList.contains("error")) isValid = false;
  });

  if (isValid) {
    console.log(`
        Narudžba uspješna! Podaci narudžbe:
        Ime i prezime: ${nameValue}
        Email: ${emailValue}
        Adresa: ${addressValue}
        Kućni broj: ${homeNumberValue}
        Poštanski broj: ${zipcodeValue}
        Telefonski broj: ${phoneNumberValue}
        Mjesto: ${locationValue}
        Posebne napomene: ${specialInstructions}`);
  }
}
