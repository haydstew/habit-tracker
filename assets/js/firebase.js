import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBv8Q3fkTFKXgOY-c5bWgiW_3MLzUcP4GQ",
  authDomain: "habit-tracker-39228.firebaseapp.com",
  projectId: "habit-tracker-39228",
  storageBucket: "habit-tracker-39228.firebasestorage.app",
  messagingSenderId: "594096185552",
  appId: "1:594096185552:web:2d2e6b0f45e2b8af213ed5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
