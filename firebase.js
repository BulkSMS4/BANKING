<!-- Firebase Core + Services -->
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"></script>

<script>
  // Your Firebase configuration (make sure these match your Firebase project settings)
  const firebaseConfig = {
    apiKey: "AIzaSyCfQGrLEYcNfmYid8XvigP5ZXJh1RNoipM",
    authDomain: "capital-one-16a95.firebaseapp.com",
    projectId: "capital-one-16a95",
    storageBucket: "capital-one-16a95.appspot.com",
    messagingSenderId: "1061937867911",
    appId: "1:1061937867911:web:347450d4e37ce73d0b5c22"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  // Initialize Auth and Firestore
  const auth = firebase.auth();
  const db = firebase.firestore();

  // ✅ Register User
  function registerUser(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  // ✅ Login User
  function loginUser(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  // ✅ Forgot Password
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  // ✅ Logout User
  function logoutUser() {
    return auth.signOut();
  }

  // ✅ Firestore Example (Save User Data after Register)
  function saveUserData(uid, data) {
    return db.collection("users").doc(uid).set(data);
  }

  // ✅ Auth State Listener (to check if logged in)
  auth.onAuthStateChanged(user => {
    if (user) {
      console.log("User logged in:", user.email);
      // Example redirect after login:
      // window.location.href = "user-dashboard.html";
    } else {
      console.log("No user logged in");
    }
  });
</script>
