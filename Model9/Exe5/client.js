// Client-side JavaScript for the chat application
// This file handles the Socket.IO connection, message sending/receiving,
// user nickname management, broadcasting notifications, and online user tracking.

// Establish a connection to the Socket.IO server
const socket = io();

// Get DOM elements
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages');
const nicknameInput = document.getElementById('nickname-input');
const onlineUsersContainer = document.getElementById('online-users');
const typingNotification = document.getElementById('typing-notification');

// Store the user's nickname
let nickname = '';

// Function to update the online users list
function updateOnlineUsers(users) {
    onlineUsersContainer.innerHTML = ''; // Clear the current list
    users.forEach(user => {
        const userItem = document.createElement('li');
        userItem.textContent = user;
        onlineUsersContainer.appendChild(userItem);
    });
}

// Function to display a message in the chat
function displayMessage(message) {
    const messageItem = document.createElement('li');
    messageItem.textContent = message;
    messagesContainer.appendChild(messageItem);
}

// Event listener for form submission
messageForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const message = messageInput.value; // Get the message input
    if (message) {
        socket.emit('chat message', { message, nickname }); // Send message to server
        messageInput.value = ''; // Clear the input field
    }
});

// Event listener for receiving messages from the server
socket.on('chat message', (data) => {
    // Prevent the sender from receiving their own message
    if (data.nickname !== nickname) {
        displayMessage(`${data.nickname}: ${data.message}`);
    }
});

// Event listener for user connection
socket.on('user connected', (user) => {
    displayMessage(`${user} has joined the chat.`);
});

// Event listener for user disconnection
socket.on('user disconnected', (user) => {
    displayMessage(`${user} has left the chat.`);
});

// Event listener for updating online users
socket.on('update users', (users) => {
    updateOnlineUsers(users);
});

// Event listener for typing notification
messageInput.addEventListener('input', () => {
    socket.emit('typing', nickname); // Notify server that user is typing
});

// Event listener for receiving typing notifications
socket.on('typing', (user) => {
    typingNotification.textContent = `${user} is typing...`;
    setTimeout(() => {
        typingNotification.textContent = ''; // Clear notification after a short delay
    }, 2000);
});

// Set the user's nickname
nicknameInput.addEventListener('change', () => {
    nickname = nicknameInput.value; // Update the nickname
});