async function registerBiometric() {
  const userEmail = prompt("Enter your email for registration:");
  if (!userEmail) {
    alert("Email is required for biometric registration.");
    return;
  }

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

  try {
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
    localStorage.setItem("email", JSON.stringify(userEmail));

    alert("Biometric registration successful!");
  } catch (error) {
    console.error("Biometric registration failed:", error);
    alert("Biometric registration failed. Try again.");
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
  const storedCredentials = JSON.parse(localStorage.getItem("biometricKey"));
  if (!storedCredentials) {
    alert("No biometric data found. Please register first.");
    return;
  }

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

  try {
    const assertion = await navigator.credentials.get({ publicKey });

    localStorage.setItem("authenticatedUser", JSON.stringify(assertion));

    alert("Authentication successful!");
    window.location.href = "habits.html";
  } catch (error) {
    console.error("Authentication failed:", error);
    alert("Authentication failed. Try again.");
  }
}

document
  .getElementById("registerBiometric")
  .addEventListener("click", registerBiometric);
document
  .getElementById("signIn")
  .addEventListener("click", authenticateBiometric);
