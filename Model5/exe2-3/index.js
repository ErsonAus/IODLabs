// Assuming the existing code includes an Express app setup and an 'add' route like:
// const express = require('express');
// const app = express();
// app.use(express.json()); // or similar for parsing
// app.post('/add', (req, res) => {
//     const { num1, num2 } = req.body;
//     const result = num1 + num2;
//     res.json({ result });
// });
// ...existing code...

// Add subtract route
app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body; // Extract numbers from request body
    const result = num1 - num2; // Perform subtraction
    res.json({ result }); // Send result as JSON
});

// Add multiply route
app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body; // Extract numbers from request body
    const result = num1 * num2; // Perform multiplication
    res.json({ result }); // Send result as JSON
});

// Add divide route
app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body; // Extract numbers from request body
    if (num2 === 0) { // Check for division by zero
        return res.status(400).json({ error: 'Division by zero' }); // Return error if dividing by zero
    }
    const result = num1 / num2; // Perform division
    res.json({ result }); // Send result as JSON
});

// ...existing code... (e.g., app.listen or other routes)