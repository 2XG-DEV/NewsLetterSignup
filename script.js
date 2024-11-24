let isSuccess = false;
let email = "";

const form = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("emailError");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailInput.validity.valid) {
    emailInput.classList.add("invalid");
    errorMessage.style.display = "block";
  } else {
    emailInput.classList.remove("invalid");
    errorMessage.style.display = "none";
    // Proceed with form submission or further logic
    console.log("Form submitted successfully.");
    isSuccess = true;
    email = emailInput.value;
    updateUI();
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.validity.valid) {
    emailInput.classList.remove("invalid");
    errorMessage.style.display = "none";
  }
});

emailInput.addEventListener("blur", () => {
  if (!emailInput.validity.valid) {
    emailInput.classList.add("invalid");
    errorMessage.style.display = "block";
  }
});

function reset() {
  isSuccess = false;
  emailInput.value = "";
  emailInput.classList.remove("invalid");
  errorMessage.style.display = "none";
  updateUI();
}

function updateUI() {
  const singup = document.getElementById("signUp");
  const success = document.getElementById("success");
  const emailShow = document.getElementById("emailShow");
  if (isSuccess) {
    singup.classList.toggle("display-none");
    success.classList.toggle("display-none");
    emailShow.innerHTML = email;
  } else {
    singup.classList.toggle("display-none");
    success.classList.toggle("display-none");
  }
}
