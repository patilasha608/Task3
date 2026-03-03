// ===== SIGNUP =====
const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const username = document.getElementById("signupUsername").value.trim();
        const password = document.getElementById("signupPassword").value.trim();
        const message = document.getElementById("signupMessage");

        if (!username || !password) {
            message.innerText = "All fields are required!";
            message.style.color = "red";
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                message.innerText = data.message;
                message.style.color = "green";

                setTimeout(() => {
                    window.location.href = "index.html";
                }, 1500);
            } else {
                message.innerText = data.message;
                message.style.color = "red";
            }

        } catch (error) {
            message.innerText = "Server error. Try again.";
            message.style.color = "red";
        }
    });
}

// ===== LOGIN =====
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const message = document.getElementById("message");

        if (!username || !password) {
            message.innerText = "All fields are required!";
            message.style.color = "red";
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                message.innerText = data.message;
                message.style.color = "green";

                setTimeout(() => {
                    window.location.href = "dashboard.html";
                }, 1500);
            } else {
                message.innerText = data.message;
                message.style.color = "red";
            }

        } catch (error) {
            message.innerText = "Server error. Try again.";
            message.style.color = "red";
        }
    });
}

// Logout
function logout() {
    window.location.href = "index.html";
}