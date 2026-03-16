const express = require('express');
const calculatorController = require('./controllers/calculatorController'); // Import calculator controller
const logger = require('./lib/logger'); // Import logging library

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Middleware to log each request
app.use((req, res, next) => {
  logger.log(`Request: ${req.method} ${req.url}`); // Log incoming requests
  next();
});

// Define routes using controller methods
app.post('/add', calculatorController.add);
app.post('/subtract', calculatorController.subtract);
app.post('/multiply', calculatorController.multiply);
app.post('/divide', calculatorController.divide);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});