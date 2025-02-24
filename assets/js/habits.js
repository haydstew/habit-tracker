import { db, auth } from "./firebase.js";
import {
  doc,
  deleteDoc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  collection,
  query,
  where,
} from "firebase/firestore";
import { GoogleGenerativeAI } from "@google/generative-ai";

const habitInput = document.getElementById("habitInput");
const addHabitBtn = document.getElementById("addHabitBtn");
const habitList = document.getElementById("habitList");

const aiButton = document.getElementById("send-btn");
const aiInput = document.getElementById("chat-input");
const chatHistory = document.getElementById("chat-history");
let chatHistoryCleared = false;

const signOutBtn = document.getElementById("signOutBtn");

let email;
let apiKey;
let genAI;
let model;

async function getApiKey() {
  let snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
  apiKey = snapshot.data().key;
  genAI = new GoogleGenerativeAI(apiKey);
  model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
}

function appendMessage(message) {
  if (!chatHistoryCleared) {
    chatHistory.innerHTML = "";
    chatHistoryCleared = true;
  }

  let history = document.createElement("div");
  history.textContent = message;
  history.className = "history";
  chatHistory.appendChild(history);
  chatHistory.scrollTop = chatHistory.scrollHeight;
  aiInput.value = "";
}

async function addHabit(habit) {
  let habitId = await addHabitToFirestore(habit);
  habitInput.value = "";
  createLiHabit(habitId, habit);
}

async function renderHabits() {
  const habits = await getHabitsFromFirestore();
  habitList.innerHTML = "";

  let habitArr = [];

  habits.forEach((habit) => {
    habitArr.push({
      id: habit.id,
      text: habit.data().text,
      completed: habit.data().completed,
    });
  });

  habitArr.sort((a, b) => new Date(b.timeCreated) - new Date(a.timeCreated));

  habitArr.forEach((habit) => {
    createLiHabit(habit.id, habit.text, habit.completed);
  });
}

async function addHabitToFirestore(habitText) {
  if (!email) {
    console.error("Email is undefined when adding habit!");
    alert("Error: No user email found. Please sign in again.");
    return;
  }

  console.log("Adding habit for email:", email);

  let habit = await addDoc(collection(db, "habits"), {
    text: habitText,
    email: email,
    completed: false,
  });

  return habit.id;
}

async function getHabitsFromFirestore() {
  let q = query(collection(db, "habits"), where("email", "==", email));
  return await getDocs(q);
}

async function deleteHabit(habitId) {
  await deleteDoc(doc(db, "habits", habitId));
}

function createLiHabit(id, text, completed = false) {
  let habitItem = document.createElement("li");
  habitItem.id = id;
  habitItem.classList.add("habit-item");

  let habitText = document.createElement("span");
  habitText.textContent = text;
  habitText.className = completed ? "completed" : "habit-text";

  let buttonContainer = document.createElement("div");
  buttonContainer.classList.add("habit-buttons");

  let completeBtn = document.createElement("button");
  completeBtn.textContent = completed
    ? "Mark as Incomplete"
    : "Mark as Complete";
  completeBtn.className = "complete-btn";
  completeBtn.addEventListener("click", async () => {
    if (!completed) {
      const confirmComplete = window.confirm(
        "Are you sure you want to mark this habit as complete?"
      );

      if (confirmComplete) {
        await toggleHabitCompletion(id, !completed);
        renderHabits();
      }
    } else {
      const confirmIncomplete = window.confirm(
        "Are you sure you want to mark this habit as incomplete?"
      );

      if (confirmIncomplete) {
        await toggleHabitCompletion(id, !completed);
        renderHabits();
      }
    }
  });

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete Habit";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this habit?"
    );

    if (confirmDelete) {
      await deleteHabit(id);
      renderHabits();
    }
  });

  buttonContainer.appendChild(completeBtn);
  buttonContainer.appendChild(deleteBtn);

  habitItem.appendChild(habitText);
  habitItem.appendChild(buttonContainer);
  habitList.appendChild(habitItem);
}

async function toggleHabitCompletion(habitId, isCompleted) {
  await updateDoc(doc(db, "habits", habitId), {
    completed: isCompleted,
  });
}

function ruleChatBot(request) {
  if (request.includes("add")) {
    appendMessage(
      'To add a new habit, enter a description into the text input under the "Add a New Habit" section, and then click on the "Add Habit" button.'
    );
    return true;
  } else if (request.includes("delete")) {
    appendMessage(
      'To delete a habit, click on its corresponding "Delete Habit" button under the "Your Habits" section.'
    );
    return true;
  } else if (request.includes("modify")) {
    appendMessage(
      'To modify the status of a habit, click on its corresponding "Mark as Complete/Incomplete" button under the "Your Habits" section.'
    );
    return true;
  } else {
    appendMessage(
      "Please specify if you would like to add, delete, or modify the status of a habit."
    );
    return true;
  }
}

async function askChatBot(request) {
  let result = await model.generateContent(request);
  appendMessage(result.response.text());
}

window.addEventListener("load", async () => {
  getApiKey();

  auth.onAuthStateChanged((user) => {
    if (user) {
      email = user.email;
    } else {
      email = localStorage.getItem("email");
    }

    if (email) {
      console.log("User is signed in:", email);
      renderHabits();
    } else {
      console.error("No authenticated user found.");
      window.location.href = "index.html";
    }
  });
});

aiButton.addEventListener("click", async () => {
  let prompt = aiInput.value.trim().toLowerCase();
  if (prompt) {
    if (!ruleChatBot(prompt)) {
      askChatBot(prompt);
    }
  } else {
    appendMessage("Please enter a prompt.");
  }
});

aiInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    aiButton.click();
  }
});

addHabitBtn.addEventListener("click", async () => {
  const habit = habitInput.value.trim();
  if (habit) {
    await addHabit(habit);
  } else {
    alert("Please enter a habit.");
  }
});

habitInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addHabitBtn.click();
  }
});

window.addEventListener("error", function (event) {
  console.error("Error occurred: ", event.message);
});

signOutBtn.addEventListener("click", async function () {
  const signOutConfirmation = window.confirm(
    "Are you sure you want to sign out?"
  );

  if (signOutConfirmation) {
    await auth.signOut();
    localStorage.removeItem("authenticatedUser");
    localStorage.removeItem("email");
    window.location.href = "index.html";
  }
});
