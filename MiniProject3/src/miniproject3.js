const express = require('express');
const mongoose = require('mongoose');
const animalRoutes = require('../routes/animalRoutes');

// Initialize the Express application
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to the database
mongoose.connect('mongodb://localhost:27017/animalDB', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => console.log('Database connected successfully'))
.catch(err => console.error('Database connection error:', err));

// Set up routes for animal data
app.use('/api/animals', animalRoutes);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});