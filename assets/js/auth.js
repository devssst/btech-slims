// GLOBAL VARIABLES
const mainContent = document.getElementById('mainContent');
const loginCard = document.getElementById('loginCard');
const showLoginBtn = document.getElementById('showLoginBtn');
const backToMain = document.getElementById('backToMain');
const loginForm = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const googleBtn = document.getElementById('google-btn');
const microsoftBtn = document.getElementById('microsoft-btn');
const forgotBtn = document.getElementById('forgot-btn')
const emailInput = document.getElementById('email');

// DUMMY CREDENTIALS
const dummyEmail = "admin@btech.ph.education";
const dummyPass = "12345678";

// SIGNIN PLACEHOLDERS
googleBtn.addEventListener("click", function () {
    alert("Google Sign-In is under construction...");
});
microsoftBtn.addEventListener("click", function () {
    alert("Microsoft Sign-In is under construction...");
});

// FORGOT EMAIL OR PASSWORD (PLACEHOLDERS)
forgotBtn.addEventListener("click", function () {
    alert("Forgot Password is under construction...\n\n\"Data are hardcoded, just change it there!\"")
});

// LOGIN AND MAIN CARD NAVIGATION
showLoginBtn.addEventListener('click', () => {
    mainContent.style.display = 'none';
    loginCard.style.display = 'block';
});

backToMain.addEventListener('click', (e) => {
    e.preventDefault();
    loginCard.style.display = 'none';
    mainContent.style.display = 'flex';
});

// SHOW/HIDE PASSWORD
togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? 'SHOW' : 'HIDE';
});

// LOGIN LOGIC
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const submitBtn = loginForm.querySelector('button[type="submit"]');

    // VALIDATION
    if (emailInput.value === dummyEmail) {
        if (passwordInput.value === dummyPass) {
            submitBtn.innerText = "ACCESS GRANTED";
            submitBtn.style.backgroundColor = "#28a745";
            submitBtn.style.borderColor = "#28a745";
            setTimeout(() => {
                window.location.href = "pages/dashboard.html";
            }, 1000);

        } else {
            triggerError("WRONG PASSWORD");
        }
    } else {
        triggerError("INVALID CREDENTIALS");
    }

    // ERROR ANIMATION
    function triggerError(message) {
        loginForm.classList.add('shake');
        const originalText = submitBtn.innerText;

        submitBtn.innerText = message;
        submitBtn.style.backgroundColor = "#ff4d4d";
        submitBtn.style.borderColor = "#ff4d4d";

        setTimeout(() => {
            loginForm.classList.remove('shake');
            submitBtn.innerText = "AUTHORIZE";
            submitBtn.style.backgroundColor = "";
            submitBtn.style.borderColor = "";
        }, 1000);
    }
});