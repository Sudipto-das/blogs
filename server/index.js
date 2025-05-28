const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://S_das:Sudiptodas%401997@cluster0.c1sttyl.mongodb.net/Blog';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Import routes
const blogRoutes = require('./routes/blogRoutes');

// Use routes
app.use('/api/blogs', blogRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Blog API' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
