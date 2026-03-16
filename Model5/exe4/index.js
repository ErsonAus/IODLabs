const express = require('express');
const router = express.Router();

// Sample friends data array for demonstration
// In a real app, this might come from a database
const friends = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' }
];

// Part 1: Add support to the 'filter' endpoint for a new query parameter 'letter' which filters friends by starting letter
// This route filters the friends array based on the 'letter' query parameter
// Example: GET /friends/filter?letter=A returns friends whose names start with 'A' (case-insensitive)
// Test with: curl "http://localhost:3000/friends/filter?letter=A" (assuming router is mounted at /friends)
// Test with invalid: curl "http://localhost:3000/friends/filter" (should return 400 error)
router.get('/filter', (req, res) => {
    const letter = req.query.letter;
    // Basic validation: check if letter is provided
    if (!letter) {
        return res.status(400).json({ error: 'Letter query parameter is required' });
    }
    // Filter friends whose name starts with the letter (case-insensitive)
    const filtered = friends.filter(friend => friend.name.toLowerCase().startsWith(letter.toLowerCase()));
    res.json(filtered);
});

// Part 2: Modify the 'info' route to only return the user-agent, content-type and accept header data
// This route returns specific header information from the request
// Example: GET /info returns { userAgent: '...', contentType: '...', accept: '...' }
// Test with: curl -H "User-Agent: MyApp" -H "Content-Type: application/json" -H "Accept: application/json" http://localhost:3000/info
router.get('/info', (req, res) => {
    // Extract specific headers
    const userAgent = req.get('User-Agent');
    const contentType = req.get('Content-Type');
    const accept = req.get('Accept');
    // Return only these headers in JSON format
    res.json({ userAgent, contentType, accept });
});

// Part 3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter
// This route retrieves a single friend by ID from the URL parameter
// Example: GET /friends/1 returns the friend with id 1
// Test with: curl http://localhost:3000/friends/1
// Test with invalid ID: curl http://localhost:3000/friends/abc (should return 400)
// Test with non-existent ID: curl http://localhost:3000/friends/99 (should return 404)
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // Basic validation: check if ID is a valid number
    if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid ID' });
    }
    // Find the friend with the matching ID
    const friend = friends.find(f => f.id === id);
    // If not found, return 404
    if (!friend) {
        return res.status(404).json({ error: 'Friend not found' });
    }
    // Return the friend object
    res.json(friend);
});

// Part 4: Complete the PUT route which will update data for an existing friend
// This route updates a friend's name by ID using data from the request body
// Example: PUT /friends/1 with body { "name": "Alicia" } updates the name
// Test with: curl -X PUT -H "Content-Type: application/json" -d '{"name":"Alicia"}' http://localhost:3000/friends/1
// Test with invalid ID: curl -X PUT -H "Content-Type: application/json" -d '{"name":"Test"}' http://localhost:3000/friends/abc (should return 400)
// Test with non-existent ID: curl -X PUT -H "Content-Type: application/json" -d '{"name":"Test"}' http://localhost:3000/friends/99 (should return 404)
// Test with invalid body: curl -X PUT -H "Content-Type: application/json" -d '{"name":123}' http://localhost:3000/friends/1 (should return 400)
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // Basic validation: check if ID is a valid number
    if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid ID' });
    }
    // Find the index of the friend with the matching ID
    const friendIndex = friends.findIndex(f => f.id === id);
    // If not found, return 404
    if (friendIndex === -1) {
        return res.status(404).json({ error: 'Friend not found' });
    }
    // Extract name from request body
    const { name } = req.body;
    // Basic validation: check if name is provided and is a string
    if (!name || typeof name !== 'string') {
        return res.status(400).json({ error: 'Name is required and must be a string' });
    }
    // Update the friend's name
    friends[friendIndex].name = name;
    // Return the updated friend object
    res.json(friends[friendIndex]);
});

module.exports = router;