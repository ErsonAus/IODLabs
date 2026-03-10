// This file exports configuration settings for the multi-server backend application.

// Define the port numbers for each server
const SERVER1_PORT = 3000; // Port for the first server
const SERVER2_PORT = 3001; // Port for the second server
const SERVER3_PORT = 3002; // Port for the third server

// Export the configuration settings as an object
module.exports = {
    SERVER1_PORT,
    SERVER2_PORT,
    SERVER3_PORT
};
const Router = require('./Routes/Exercise1.1'); // Importing the first server configuration
const Router = require('./Routes/Exercise1.2'); // Importing the second server configuration
const Router = require('./Routes/Exercise1.3'); // Importing the third server configuration