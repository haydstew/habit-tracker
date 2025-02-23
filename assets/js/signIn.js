import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// Biometric Registration
async function registerBiometric() {
  const userEmail = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!userEmail || !password) {
    alert("Email and password are required.");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, userEmail, password);
    alert("Account created. Now setting up biometrics...");

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

    alert("Biometric registration successful!");
  } catch (error) {
    console.error("Registration failed:", error);
    alert("Error during registration. Try again.");
  }
}

// Convert Base64 to Uint8Array
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

// Biometric + Firebase Sign In
async function authenticateBiometric() {
  const storedCredentials = JSON.parse(localStorage.getItem("biometricKey"));
  if (!storedCredentials) {
    alert("No biometric data found. Please register first.");
    return;
  }

  try {
    // Biometric Authentication FIRST
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

    // Now, log in with Firebase
    const userPassword = document.getElementById("password").value;
    if (!userPassword) {
      alert("Password is required.");
      return;
    }

    await signInWithEmailAndPassword(
      auth,
      storedCredentials.email,
      userPassword
    );

    localStorage.setItem("authenticatedUser", JSON.stringify(true));
    alert("Authentication successful!");
    window.location.href = "habits.html";
  } catch (error) {
    console.error("Authentication failed:", error);
    alert("Authentication failed. Try again.");
  }
}

// Event Listeners
document
  .getElementById("registerBiometric")
  .addEventListener("click", registerBiometric);
document
  .getElementById("signIn")
  .addEventListener("click", authenticateBiometric);
