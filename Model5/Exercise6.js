const express = require('express');
const calculatorController = require('./Exercise6.3'); // Import the new controller
const Logger = require('./Exercise6.1'); // Import logging library

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Routes now delegate to controller
app.post('/add', calculatorController.add);
app.post('/subtract', calculatorController.subtract);
app.post('/multiply', calculatorController.multiply);
app.post('/divide', calculatorController.divide);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});