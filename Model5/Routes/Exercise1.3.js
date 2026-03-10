// Importing the required modules
const express = require('express'); // Express framework for building web applications
const { PORT3 } = require('./utils/config'); // Importing the port configuration from config.js

// Creating an instance of an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Defining a simple request handler for the root route
app.get('/', (req, res) => {
    res.send('Welcome to Server 3!'); // Sending a welcome message
});

// Starting the server and listening on the specified port
app.listen(PORT3, () => {
    console.log(`Server 3 is running on http://localhost:${PORT3}`); // Logging the server start message
});