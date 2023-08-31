// Get the form element.
const form = document.querySelector('form');

// Create the validation functions.
function validateName(name) {

  // Check if the name is empty.
  if (name === '') {
    return false;
  }

  // Check if the name contains any invalid characters.
  const invalidCharacters = /[`~!@#$%^&*()<>?:{}|";'\\/]/g;
  if (invalidCharacters.test(name)) {
    return false;
  }

  return true;
}

function validateEmail(email) {

  // Check if the email is empty.
  if (email === '') {
    return false;
  }

  // Check if the email is valid.
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  return true;
}

function validatePassword(password) {

  // Check if the password is empty.
  if (password === '') {
    return false;
  }

  // Check if the password contains at least one lowercase letter.
  const hasLowercase = /[a-z]/.test(password);
  if (!hasLowercase) {
    return false;
  }

  // Check if the password contains at least one uppercase letter.
  const hasUppercase = /[A-Z]/.test(password);
  if (!hasUppercase) {
    return false;
  }

  // Check if the password contains at least one number.
  const hasNumber = /[0-9]/.test(password);
  if (!hasNumber) {
    return false;
  }

  // Check if the password is at least 8 characters long.
  if (password.length < 8) {
    return false;
  }

  return true;
}

function validateConfirmPassword(password, confirmPassword) {

  // Check if the confirm password is empty.
  if (confirmPassword === '') {
    return false;
  }

  // Check if the confirm password matches the password.
  if (password !== confirmPassword) {
    return false;
  }

  return true;
}

// Attach the validation functions to the form fields.
form.querySelector('input[name="name"]').addEventListener('blur', validateName);
form.querySelector('input[name="email"]').addEventListener('blur', validateEmail);
form.querySelector('input[name="password"]').addEventListener('blur', validatePassword);
form.querySelector('input[name="confirmPassword"]').addEventListener('blur', validateConfirmPassword);

// Prevent the form from being submitted if any of the form fields are invalid.
form.addEventListener('submit', function() {

  // Validate the form fields.
  const isValid = validateName(form.querySelector('input[name="name"]').value) &&
                  validateEmail(form.querySelector('input[name="email"]').value) &&
                  validatePassword(form.querySelector('input[name="password"]').value) &&
                  validateConfirmPassword(form.querySelector('input[name="password"]').value, form.querySelector('input[name="confirmPassword"]').value);

  // If the form is valid, submit the form.
  if (isValid) {
    form.submit();
  }

});


