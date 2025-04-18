import express from 'express';
import cors from 'cors';  // Ensure the cors module is imported before using it
import dotenv from 'dotenv';
import authRouter from './routes/authRouter.js';
import dbConnection from './database/dbConnection.js';

const app = express();

// Load environment variables
dotenv.config();

// CORS Configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Make sure this is the correct frontend URL
  methods: 'GET, POST, PUT, DELETE',
  credentials: true,
};

// Apply CORS middleware with options
app.use(cors(corsOptions));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRouter);

// Test route
app.get("/", (req, res) => {
  res.send("Hello from Server");
});

// Database connection
dbConnection();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

