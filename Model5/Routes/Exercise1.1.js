// Import the required modules
const http = require('http'); // HTTP module to create the server
const config = require('./utils/config'); // Import configuration settings

// Define a request handler function
const requestHandler = (req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Send a response message
    res.end('Hello from Server 1!\n');
};

// Create the server using the request handler
const server = http.createServer(requestHandler);

// Start the server and listen on the specified port
server.listen(config.port1, () => {
    console.log(`Server 1 is running on port ${config.port1}`); // Log the server start message
});