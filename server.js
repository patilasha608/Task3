const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// In-memory database (temporary storage)
let users = [
    { username: "ap0509771@gmail.com", password: "123456" }
];

// ===== SIGNUP API =====
app.post("/signup", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    // Check if user already exists
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: "User already exists"
        });
    }

    // Save new user
    users.push({ username, password });

    res.json({
        success: true,
        message: "Signup successful"
    });
});

// ===== LOGIN API =====
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    const user = users.find(
        (u) => u.username === username && u.password === password
    );

    if (user) {
        return res.json({
            success: true,
            message: "Login successful"
        });
    } else {
        return res.status(401).json({
            success: false,
            message: "Invalid username or password"
        });
    }
});

// Test route
app.get("/", (req, res) => {
    res.send("Backend is working");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});