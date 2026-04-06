class Calculator {
  // Generate a random ID (using crypto for uniqueness)
  static getId() {
    return require('crypto').randomBytes(8).toString('hex'); // Random 16-char hex string
  }

  // Addition operation
  static add(a, b) {
    return a + b;
  }

  // Subtraction operation
  static subtract(a, b) {
    return a - b;
  }

  // Multiplication operation
  static multiply(a, b) {
    return a * b;
  }

  // Division operation
  static divide(a, b) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  }
}

module.exports = Calculator;