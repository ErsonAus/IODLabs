const Calculator = require('../lib/calculator'); // Import Calculator library

describe('Calculator', () => {
  test('add should return sum', () => {
    expect(Calculator.add(2, 3)).toBe(5);
  });

  test('subtract should return difference', () => {
    expect(Calculator.subtract(5, 3)).toBe(2);
  });

  test('multiply should return product', () => {
    expect(Calculator.multiply(2, 3)).toBe(6);
  });

  test('divide should return quotient', () => {
    expect(Calculator.divide(6, 3)).toBe(2);
  });

  test('divide by zero should throw error', () => {
    expect(() => Calculator.divide(6, 0)).toThrow('Division by zero');
  });

  test('getId should return a string', () => {
    const id = Calculator.getId();
    expect(typeof id).toBe('string');
    expect(id.length).toBe(16); // 8 bytes * 2 hex chars
  });
});