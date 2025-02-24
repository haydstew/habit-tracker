import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const toggleLink = document.querySelector(".toggle-form-link");
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

function base64urlToUint8Array(base64url) {
  const padding = "=".repeat((4 - (base64url.length % 4)) % 4);
  const base64 = (base64url + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

async function registerBiometric() {
  const userEmail = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (userEmail === "" || password === "") {
    alert("Please enter a valid email address and password.");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, userEmail, password);

    const publicKey = {
      challenge: new Uint8Array(32),
      rp: { name: "Habit Tracker" },
      user: {
        id: new TextEncoder().encode(userEmail),
        name: userEmail,
        displayName: "User",
      },
      pubKeyCredParams: [{ type: "public-key", alg: -7 }],
      authenticatorSelection: { userVerification: "required" },
      timeout: 60000,
      attestation: "direct",
    };

    const credential = await navigator.credentials.create({ publicKey });

    const idBase64 = btoa(
      String.fromCharCode(...new Uint8Array(credential.rawId))
    );

    localStorage.setItem(
      "biometricKey",
      JSON.stringify({
        id: idBase64,
        email: userEmail,
      })
    );

    alert(
      "You have registered successfully! You can now sign into your account."
    );
  } catch (error) {
    console.error("Registration failed:", error);
    alert("Error during registration. Try again.");
  }
}

async function authenticateBiometric() {
  const userEmail = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (userEmail === "" || password === "") {
    alert("Please enter a valid email address and password.");
    return;
  }

  const storedCredentials = JSON.parse(localStorage.getItem("biometricKey"));
  if (!storedCredentials) {
    alert("No biometric data found. Please register first.");
    return;
  }

  try {
    const publicKey = {
      challenge: new Uint8Array(32),
      allowCredentials: [
        {
          id: base64urlToUint8Array(storedCredentials.id),
          type: "public-key",
        },
      ],
      userVerification: "required",
      timeout: 60000,
    };

    await navigator.credentials.get({ publicKey });

    await signInWithEmailAndPassword(auth, storedCredentials.email, password);

    localStorage.setItem("authenticatedUser", JSON.stringify(true));
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
