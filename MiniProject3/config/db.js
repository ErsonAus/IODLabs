// src/config/db.js
const mongoose = require('mongoose');

// Database connection URI
const dbURI = 'your_database_connection_string_here'; // Replace with your actual database connection string

// Function to connect to the database
const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1); // Exit process with failure
    }
};

// Export the connection function
module.exports = connectDB;