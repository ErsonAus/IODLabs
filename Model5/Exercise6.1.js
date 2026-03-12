const { randomUUID } = require('crypto'); // For generating unique IDs

class Calculator {
  // Perform addition and return result with unique ID
  static add(a, b) {
    const id = randomUUID(); // Generate random ID instead of time-based
    const result = a + b;
    return { id, result };
  }

  // Perform subtraction
  static subtract(a, b) {
    const id = randomUUID();
    const result = a - b;
    return { id, result };
  }

  // Perform multiplication
  static multiply(a, b) {
    const id = randomUUID();
    const result = a * b;
    return { id, result };
  }

  // Perform division (handle divide by zero)
  static divide(a, b) {
    if (b === 0) throw new Error('Division by zero');
    const id = randomUUID();
    const result = a / b;
    return { id, result };
  }
}

module.exports = Calculator;