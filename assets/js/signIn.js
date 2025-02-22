const sw = new URL("./service-worker.js", import.meta.url);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(sw.href, {
      scope: "/habit-tracker/",
    })
    .then(() => console.log("Service Worker Registered for scope:", sw.href))
    .catch((err) => console.error("Service Worker Error:", err));
}

async function registerBiometric() {
  const userEmail = prompt("Enter your email for registration:");
  if (!userEmail) {
    alert("Email is required for biometric registration.");
    return;
  }

  const publicKey = {
    challenge: new Uint8Array(32), // Random challenge
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

  try {
    const credential = await navigator.credentials.create({ publicKey });

    // Store credentials securely in sessionStorage
    sessionStorage.setItem(
      "biometricKey",
      JSON.stringify({
        id: credential.id,
        email: userEmail,
      })
    );
    localStorage.setItem("email", JSON.stringify(userEmail));

    alert("Biometric registration successful!");
  } catch (error) {
    console.error("Biometric registration failed:", error);
    alert("Biometric registration failed. Try again.");
  }
}

async function authenticateBiometric() {
  const storedCredentials = JSON.parse(sessionStorage.getItem("biometricKey"));
  if (!storedCredentials) {
    alert("No biometric data found. Please register first.");
    return;
  }

  const publicKey = {
    challenge: new Uint8Array(32), // Random challenge
    allowCredentials: [
      {
        id: new TextEncoder().encode(storedCredentials.id),
        type: "public-key",
      },
    ],
    userVerification: "required",
    timeout: 60000,
  };

  try {
    const assertion = await navigator.credentials.get({ publicKey });

    // Store authenticated session securely
    sessionStorage.setItem("authenticatedUser", JSON.stringify(assertion));

    alert("Authentication successful!");
    window.location.href = "habits.html"; // Redirect to habits page
  } catch (error) {
    console.error("Authentication failed:", error);
    alert("Authentication failed. Try again.");
  }
}

// Event listeners for buttons
document
  .getElementById("registerBiometric")
  .addEventListener("click", registerBiometric);
document
  .getElementById("signIn")
  .addEventListener("click", authenticateBiometric);
