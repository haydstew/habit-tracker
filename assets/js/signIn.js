import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const toggleLink = document.querySelector("toggle-form-link");
const formTitle = document.getElementById("formTitle");
const actionButton = document.getElementById("actionButton");
const toggleLinkText = document.getElementById("toggleLink");

let isRegistering = false;

function toggleForm(event) {
  event.preventDefault();

  isRegistering = !isRegistering;

  if (isRegistering) {
    formTitle.textContent = "Register";
    actionButton.textContent = "Register";
    toggleLinkText.innerHTML =
      'Already have an account? <a href="#" class="toggle-form-link">Sign in here</a>';
  } else {
    formTitle.textContent = "Sign In";
    actionButton.textContent = "Sign In";
    toggleLinkText.innerHTML =
      'Don\'t have an account? <a href="#" class="toggle-form-link">Register here</a>';
  }

  const newToggleLink = document.querySelector(".toggle-form-link");
  newToggleLink.addEventListener("click", toggleForm);
}

async function registerBiometric() {
  const userEmail = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (userEmail === "" || password === "") {
    alert("Please enter an email and password.");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, userEmail, password);
    alert(
      "You have been registered successfully! You can now sign into your account."
    );
  } catch (error) {
    console.error("Registration failed:", error);
    alert("An error occurred during registration. Please ry again.");
  }
}

async function authenticateBiometric() {
  const userEmail = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (userEmail === "" || password === "") {
    alert("Please enter an email and password.");
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, userEmail, password);
    window.location.href = "habits.html";
  } catch (error) {
    console.error("Authentication failed:", error);
    alert("Authentication failed. Please try again.");
  }
}

actionButton.addEventListener("click", () => {
  if (isRegistering) {
    registerBiometric();
  } else {
    authenticateBiometric();
  }
});

toggleLink.addEventListener("click", toggleForm);
