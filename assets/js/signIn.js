import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const toggleLink = document.getElementById("toggleForm");
const formTitle = document.getElementById("formTitle");
const actionButton = document.getElementById("actionButton");
const toggleLinkText = document.getElementById("toggleLink");

let isRegistering = false;

toggleLink.addEventListener("click", (event) => {
  event.preventDefault();

  isRegistering = !isRegistering;

  if (isRegistering) {
    // Switch to Register form
    formTitle.textContent = "Register";
    actionButton.textContent = "Register";
    toggleLinkText.innerHTML =
      'Already have an account? <a href="#" id="toggleForm">Sign In here</a>';
  } else {
    // Switch to Sign In form
    formTitle.textContent = "Sign In";
    actionButton.textContent = "Sign In";
    toggleLinkText.innerHTML =
      'Don\'t have an account? <a href="#" id="toggleForm">Register here</a>';
  }
});

// Handle form submission for Sign In and Register
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
    // Handle additional biometric registration here if needed
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

// Add event listeners based on form mode (sign-in or register)
actionButton.addEventListener("click", () => {
  if (isRegistering) {
    registerBiometric();
  } else {
    authenticateBiometric();
  }
});
