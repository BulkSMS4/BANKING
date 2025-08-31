// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
    from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCfQGrLEYcNfmYid8XvigP5ZXJh1RNoipM",
  authDomain: "capital-one-16a95.firebaseapp.com",
  projectId: "capital-one-16a95",
  storageBucket: "capital-one-16a95.firebasestorage.app",
  messagingSenderId: "1061937867911",
  appId: "1:1061937867911:web:347450d4e37ce73d0b5c22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ---------------- REGISTER -----------------
window.registerUser = function () {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Registration Successful ✅");
      // Save email to localStorage (so we know who is logged in)
      localStorage.setItem("currentUser", email);
      // Go straight to dashboard after registration
      window.location.href = "user-dashboard.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
};

// ---------------- LOGIN -----------------
window.loginUser = function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login Successful ✅");
      // Save email to localStorage
      localStorage.setItem("currentUser", email);
      // After login, open PIN page first
      window.location.href = "pin.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
};
