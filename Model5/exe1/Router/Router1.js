// Import the required modules for creating an HTTP server
const http = require('http');

// Define the port on which the server will listen
const PORT = 3001; // You can change this to any available port

// Create an HTTP server that responds with a simple message
const server = http.createServer((req, res) => {
    // Set the response header to indicate the content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send a response message to the client
    res.end('Hello from Server 1!\n');
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
    // Log a message to the console when the server is running
    console.log(`Server 1 is running on http://localhost:${PORT}`);
});