// There are many ways to pick a DOM node; here we get the form itself and the email
//   input box, as well as the span element into which we will place the error message.

const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (e) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ""; // reset the content of the message
    emailError.className = "error"; // reset the visual state of the message
  } else {
    // if there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", (e) => {
  // if email is valid, we let the form submit

  if (!email.validity.valid) {
    // if it isnt valid, we displau am appropriate error message
    showError();
    // then we prevent the form from being sent by canceling the event
    e.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // if the field is empty display the follwoing error message
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address, display the following error message.
    emailError.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
    // If the data is too short, display the following error message.
    emailError.textContent = `E-mail should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active";
}
