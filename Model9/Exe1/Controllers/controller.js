const Calculator = require('../lib/calculator'); // Import Calculator library
const logger = require('../lib/logger'); // Import logging library

// Controller for addition
const add = (req, res) => {
  const { a, b } = req.body;
  const result = Calculator.add(a, b);
  logger.log(`Add operation: ID=${Calculator.getId()}, Result=${result}`); // Log with ID and result
  res.json({ result });
};

// Controller for subtraction
const subtract = (req, res) => {
  const { a, b } = req.body;
  const result = Calculator.subtract(a, b);
  logger.log(`Subtract operation: ID=${Calculator.getId()}, Result=${result}`);
  res.json({ result });
};

// Controller for multiplication
const multiply = (req, res) => {
  const { a, b } = req.body;
  const result = Calculator.multiply(a, b);
  logger.log(`Multiply operation: ID=${Calculator.getId()}, Result=${result}`);
  res.json({ result });
};

// Controller for division
const divide = (req, res) => {
  const { a, b } = req.body;
  if (b === 0) return res.status(400).json({ error: 'Division by zero' });
  const result = Calculator.divide(a, b);
  logger.log(`Divide operation: ID=${Calculator.getId()}, Result=${result}`);
  res.json({ result });
};

module.exports = { add, subtract, multiply, divide };