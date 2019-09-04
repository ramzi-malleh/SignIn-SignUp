const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect database
connectDB();

// Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API is running"));

// Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is working on port ${PORT}`));
