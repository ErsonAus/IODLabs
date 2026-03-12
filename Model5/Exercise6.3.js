const Calculator = require('./Exercise6.1');
const Logger = require('./Exercise6.2');

// Controller for add operation
const add = (req, res) => {
  const { a, b } = req.body;
  try {
    const { id, result } = Calculator.add(a, b);
    Logger.log(id, result, 'add'); // Log the call
    res.json({ id, result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller for subtract operation
const subtract = (req, res) => {
  const { a, b } = req.body;
  try {
    const { id, result } = Calculator.subtract(a, b);
    Logger.log(id, result, 'subtract');
    res.json({ id, result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller for multiply operation
const multiply = (req, res) => {
  const { a, b } = req.body;
  try {
    const { id, result } = Calculator.multiply(a, b);
    Logger.log(id, result, 'multiply');
    res.json({ id, result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller for divide operation
const divide = (req, res) => {
  const { a, b } = req.body;
  try {
    const { id, result } = Calculator.divide(a, b);
    Logger.log(id, result, 'divide');
    res.json({ id, result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { add, subtract, multiply, divide };