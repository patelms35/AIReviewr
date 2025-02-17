const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// Enable CORS for frontend (Vercel)
app.use(cors({
  origin: "*", // Change this to your frontend URL for better security
  methods: "GET,POST",
  allowedHeaders: "Content-Type",
}));

// Middleware to parse JSON request body
app.use(express.json());

// Define API routes
app.use('/ai', aiRoutes);

// Health Check Route (Optional)
app.get("/", (req, res) => {
  res.send("AI Code Reviewer Backend is Running!");
});

module.exports = app;
