const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// Enable CORS for frontend (Vercel)
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://ai-reviewr.vercel.app'] // Your frontend URL
    : 'http://localhost:5173', // Vite's default development port
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
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
