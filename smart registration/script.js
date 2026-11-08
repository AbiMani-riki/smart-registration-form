
// Get HTML elements

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const bioInput = document.getElementById("bio");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const bioError = document.getElementById("bioError");

const charCount = document.getElementById("charCount");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");


// 1. Name Validation

function validateName() {

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");
        return false;
    }

    nameError.textContent = "";
    nameInput.classList.add("valid");
    nameInput.classList.remove("invalid");

    return true;
}


// 2. Email Validation

function validateEmail() {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        return false;
    }

    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Enter a valid email address";
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        return false;
    }

    emailError.textContent = "";
    emailInput.classList.add("valid");
    emailInput.classList.remove("invalid");

    return true;
}


// 3. Password Validation

function validatePassword() {

    if (passwordInput.value === "") {
        passwordError.textContent = "Password is required";
        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");
        return false;
    }

    if (passwordInput.value.length < 6) {
        passwordError.textContent =
            "Password must contain at least 6 characters";

        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");
        return false;
    }

    passwordError.textContent = "";
    passwordInput.classList.add("valid");
    passwordInput.classList.remove("invalid");

    return true;
}


// 4. Bio Validation + Character Counting

function validateBio() {

    const length = bioInput.value.length;

    charCount.textContent = length + " / 200 characters";

    if (bioInput.value.trim() === "") {
        bioError.textContent = "Bio is required";
        bioInput.classList.add("invalid");
        bioInput.classList.remove("valid");
        return false;
    }

    bioError.textContent = "";
    bioInput.classList.add("valid");
    bioInput.classList.remove("invalid");

    return true;
}


// 5. Check All Fields

function checkButton() {

    const isValid =
        validateName() &&
        validateEmail() &&
        validatePassword() &&
        validateBio();

    submitBtn.disabled = !isValid;
}


// 6. Real-time Validation

nameInput.addEventListener("input", function () {
    validateName();
    checkButton();
});

emailInput.addEventListener("input", function () {
    validateEmail();
    checkButton();
});

passwordInput.addEventListener("input", function () {
    validatePassword();
    checkButton();
});

bioInput.addEventListener("input", function () {
    validateBio();
    checkButton();
});


// 7. Blur Validation

nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);
bioInput.addEventListener("blur", validateBio);


// 8. Show Required Messages Initially

window.addEventListener("DOMContentLoaded", function () {

    nameError.textContent = "Name is required";
    emailError.textContent = "Email is required";
    passwordError.textContent = "Password is required";
    bioError.textContent = "Bio is required";

    charCount.textContent = "0 / 200 characters";

    submitBtn.disabled = true;

});


// 9. Form Submission

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const nameValid = validateName();
    const emailValid = validateEmail();
    const passwordValid = validatePassword();
    const bioValid = validateBio();

    if (nameValid && emailValid && passwordValid && bioValid) {

        successMessage.textContent =
            "Registration successful!";

        form.reset();

        // Reset styles

        [nameInput, emailInput, passwordInput, bioInput]
            .forEach(input => {
                input.classList.remove("valid", "invalid");
            });

        // Reset messages

        nameError.textContent = "Name is required";
        emailError.textContent = "Email is required";
        passwordError.textContent = "Password is required";
        bioError.textContent = "Bio is required";

        charCount.textContent = "0 / 200 characters";

        submitBtn.disabled = true;
    }

});
