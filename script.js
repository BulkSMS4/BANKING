// Load user data from localStorage
let user = JSON.parse(localStorage.getItem("user")) || {
  name: "John Doe",
  email: "john@example.com",
  pin: "1234",
  balance: 500,
  photo: "",
  history: []
};

// Show PIN screen with user photo + name
document.getElementById("pin-name").innerText = user.name;
if (user.photo) {
  document.getElementById("pin-photo").src = user.photo;
}

// Unlock dashboard
function unlockDashboard() {
  let pinInput = document.getElementById("pin-input").value;
  if (pinInput === user.pin) {
    document.getElementById("pin-screen").style.display = "none";
    document.getElementById("dashboard").classList.remove("hidden");
    loadDashboard();
  } else {
    alert("Wrong PIN!");
  }
}

// Load Dashboard Data
function loadDashboard() {
  document.getElementById("user-name").innerText = user.name;
  document.getElementById("user-email").innerText = user.email;
  document.getElementById("balance").innerText = user.balance;
  if (user.photo) document.getElementById("user-photo").src = user.photo;
  renderHistory();
}

// Deposit
function deposit() {
  let amt = parseFloat(document.getElementById("deposit-amount").value);
  if (!isNaN(amt) && amt > 0) {
    user.balance += amt;
    user.history.push({ type: "Deposit", amount: amt, date: new Date().toLocaleString() });
    saveData();
    loadDashboard();
  }
}

// Withdraw
function withdraw() {
  let amt = parseFloat(document.getElementById("withdraw-amount").value);
  if (!isNaN(amt) && amt > 0 && amt <= user.balance) {
    user.balance -= amt;
    user.history.push({ type: "Withdraw", amount: amt, date: new Date().toLocaleString() });
    saveData();
    loadDashboard();
  } else {
    alert("Invalid or insufficient balance!");
  }
}

// Render Transaction History
function renderHistory() {
  let list = document.getElementById("history-list");
  list.innerHTML = "";
  user.history.forEach(tx => {
    let li = document.createElement("li");
    li.textContent = `${tx.type}: $${tx.amount} on ${tx.date}`;
    list.appendChild(li);
  });
}

// Update Settings
function updateSettings() {
  let newName = document.getElementById("new-name").value;
  let newEmail = document.getElementById("new-email").value;
  let newPhoto = document.getElementById("new-photo").files[0];

  if (newName) user.name = newName;
  if (newEmail) user.email = newEmail;
  if (newPhoto) {
    let reader = new FileReader();
    reader.onload = function(e) {
      user.photo = e.target.result;
      saveData();
      loadDashboard();
    };
    reader.readAsDataURL(newPhoto);
  } else {
    saveData();
    loadDashboard();
  }
}

// Save to localStorage
function saveData() {
  localStorage.setItem("user", JSON.stringify(user));
}

// Show Section
function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// Logout
function logout() {
  location.reload();
}
