const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/zimbabwe-vision", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Schema and Model
const feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

// API Endpoints
app.post("/api/feedback", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const feedback = new Feedback({ name, email, message });
        await feedback.save();
        res.status(201).json({ message: "Feedback submitted successfully!" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while submitting feedback." });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));