const form = document.querySelector("form");
const customerName = document.getElementById("customerName");
const customerEmail = document.getElementById("customerEmail");
const customerAddress = document.getElementById("customerAddress");
const customerHomeNumber = document.getElementById("customerHomeNumber");
const customerZipcode = document.getElementById("customerZipcode");
const customerPhoneNumber = document.getElementById("customerPhoneNumber");
const customerLocation = document.getElementById("customerLocation");

const submitBtn = document.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

// function checkInputs() {
//   const usernameValue = customerName.value.trim();
//   const emailValue = customerEmail.value.trim();
//   const addressValue = customerAddress.value.trim();
//   const homeNumberValue = customerHomeNumber.value.trim();
//   const zipcodeValue = customerZipcode.value.trim();
//   const phoneNumberValue = customerPhoneNumber.value.trim().replaceAll("-", "");
//   const locationValue = customerLocation.value.trim();

//   if (usernameValue === "")
//     setErrorFor(customerName, "Molimo unesite ime i prezime");
//   if (usernameValue !== "") setSuccessFor(customerName);

//   if (emailValue === "")
//     setErrorFor(customerEmail, "Molimo unesite email adresu");
//   if (emailValue !== "" && !isEmail(emailValue))
//     setErrorFor(customerEmail, "Molimo unesite pravilan email");
//   if (emailValue !== "" && isEmail(emailValue)) setSuccessFor(customerEmail);

//   if (addressValue === "")
//     setErrorFor(customerAddress, "Molimo unesite adresu");
//   if (addressValue !== "") setSuccessFor(customerAddress);

//   if (homeNumberValue === "")
//     setErrorFor(customerHomeNumber, "Molimo unesite kućni broj");
//   if (homeNumberValue !== "") setSuccessFor(customerHomeNumber);

//   if (zipcodeValue === "")
//     setErrorFor(customerZipcode, "Molimo unesite poštanski broj");
//   if (zipcodeValue !== "") setSuccessFor(customerZipcode);

//   if (phoneNumberValue === "")
//     setErrorFor(customerPhoneNumber, "Molimo unesite telefonski broj");
//   if (phoneNumberValue !== "" && phoneNumberValue.length < 9)
//     setErrorFor(customerPhoneNumber, "Broj mora sadržati najmanje 9 brojeva");
//   if (phoneNumberValue !== "" && phoneNumberValue.length > 9)
//     setSuccessFor(customerPhoneNumber);

//   if (locationValue === "")
//     setErrorFor(customerLocation, "Molimo unesite mjesto");
//   if (locationValue !== "") setSuccessFor(customerLocation);
// }

// function setErrorFor(input, message) {
//   const formInput = input.parentElement;
//   const errorEl = formInput.querySelector(".error-message");
//   formInput.className = "form-input error";
//   errorEl.innerText = message;
// }

// function setSuccessFor(input) {
//   const formInput = input.parentElement;
//   formInput.className = "form-input success";
// }

// function isEmail(email) {
//   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     email
//   );
// }

function validateInput(
  inputValue,
  errorMessage,
  inputElement,
  validationFunction,
  validationErrorMessage
) {
  if (inputValue === "") {
    setErrorFor(inputElement, errorMessage);
  } else if (validationFunction && !validationFunction(inputValue)) {
    setErrorFor(inputElement, validationErrorMessage || errorMessage);
  } else {
    setSuccessFor(inputElement);
  }
}

function setErrorFor(input, message) {
  const formInput = input.parentElement;
  const errorEl = formInput.querySelector(".error-message");
  formInput.className = "form-input error";
  errorEl.innerText = message;
}

function setSuccessFor(input) {
  const formInput = input.parentElement;
  formInput.className = "form-input success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function checkInputs() {
  const nameValue = customerName.value.trim();
  const emailValue = customerEmail.value.trim();
  const addressValue = customerAddress.value.trim();
  const homeNumberValue = customerHomeNumber.value.trim();
  const zipcodeValue = customerZipcode.value.trim();
  const phoneNumberValue = customerPhoneNumber.value.trim().replaceAll(" ", "");
  const locationValue = customerLocation.value.trim();

  validateInput(nameValue, "Molimo unesite ime i prezime", customerName, null);

  validateInput(
    emailValue,
    "Molimo unesite ispravnu email adresu",
    customerEmail,
    isEmail
  );

  validateInput(addressValue, "Molimo unesite adresu", customerAddress, null);

  validateInput(
    homeNumberValue,
    "Molimo unesite kućni broj",
    customerHomeNumber,
    null
  );

  validateInput(
    zipcodeValue,
    "Molimo unesite poštanski broj",
    customerZipcode,
    null
  );

  validateInput(
    phoneNumberValue,
    "Molimo unesite telefonski broj",
    customerPhoneNumber,
    (phoneNumber) => phoneNumber.length >= 9,
    "Broj mora sadržati najmanje 9 brojeva"
  );

  validateInput(locationValue, "Molimo unesite mjesto", customerLocation, null);

  const formInputs = document.querySelectorAll(".form-input");
  let isValid = true;
  formInputs.forEach((input) => {
    if (input.classList.contains("error")) isValid = false;
  });

  // if all inputs are valid, log the input values
  if (isValid) {
    console.log(
      `Ime i prezime: ${nameValue}
        Email: ${emailValue}
        Adresa: ${addressValue}
        Kućni broj: ${homeNumberValue}
        Postanski broj: ${zipcodeValue}
        Telefonski broj: ${phoneNumberValue}
        Mjesto: ${locationValue}`
    );
  }
}
