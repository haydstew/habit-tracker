import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const userEmail = document.getElementById("email").value;
const password = document.getElementById("password").value;

const registerBtn = document.getElementById("register");
const signInBtn = document.getElementById("signIn");

async function registerBiometric() {
  if (!userEmail || !password) {
    alert("Email and password are required.");
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

    alert("Biometric registration successful!");
  } catch (error) {
    console.error("Registration failed:", error);
    alert("Error during registration. Try again.");
  }
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

async function authenticateBiometric() {
  if (!userEmail || !password) {
    alert("Email and password are required.");
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
    alert("Authentication successful!");
    window.location.href = "habits.html";
  } catch (error) {
    console.error("Authentication failed:", error);
    alert("Authentication failed. Try again.");
  }
}

registerBtn.addEventListener("click", registerBiometric);
signInBtn.addEventListener("click", authenticateBiometric);
