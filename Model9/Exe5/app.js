// Importing required modules
const express = require('express'); // Express framework for server
const http = require('http'); // HTTP module to create server
const socketIo = require('socket.io'); // Socket.IO for real-time communication

// Creating an instance of Express
const app = express(); 

// Creating an HTTP server
const server = http.createServer(app); 

// Setting up Socket.IO on the server
const io = socketIo(server); 

// Array to keep track of online users
let onlineUsers = {}; 

// Serve static files from the public directory
app.use(express.static('public')); 

// Listen for incoming connections from clients
io.on('connection', (socket) => {
    console.log('A user connected'); // Log when a user connects

    // Handle nickname assignment
    socket.on('setNickname', (nickname) => {
        socket.nickname = nickname; // Assign nickname to the socket
        onlineUsers[socket.id] = nickname; // Store nickname in online users
        io.emit('updateUserList', Object.values(onlineUsers)); // Update user list for all clients
        io.emit('chatMessage', `${nickname} has joined the chat`); // Notify all users of new connection
    });

    // Handle incoming chat messages
    socket.on('chatMessage', (msg) => {
        // Broadcast message to all clients except the sender
        socket.broadcast.emit('chatMessage', { msg, nickname: socket.nickname });
    });

    // Handle user typing notification
    socket.on('typing', () => {
        socket.broadcast.emit('typing', { nickname: socket.nickname }); // Notify others that user is typing
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected'); // Log when a user disconnects
        if (socket.nickname) {
            delete onlineUsers[socket.id]; // Remove user from online users
            io.emit('updateUserList', Object.values(onlineUsers)); // Update user list for all clients
            io.emit('chatMessage', `${socket.nickname} has left the chat`); // Notify all users of disconnection
        }
    });
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000'); // Log server start
});