const request = require('supertest');
const express = require('express');
const calculatorController = require('./Exercise6.3'); // Import the controller

const app = express();
app.use(express.json());
app.post('/add', calculatorController.add);
app.post('/subtract', calculatorController.subtract);
app.post('/multiply', calculatorController.multiply);
app.post('/divide', calculatorController.divide);

describe('Calculator Controller Tests', () => {
  // Test add operation
  test('POST /add should return correct sum', async () => {
    const response = await request(app)
      .post('/add')
      .send({ a: 2, b: 3 })
      .expect(200);
    expect(response.body.result).toBe(5);
    expect(response.body.id).toBeDefined(); // Check ID is present
  });

  // Test subtract operation
  test('POST /subtract should return correct difference', async () => {
    const response = await request(app)
      .post('/subtract')
      .send({ a: 5, b: 3 })
      .expect(200);
    expect(response.body.result).toBe(2);
    expect(response.body.id).toBeDefined();
  });

  // Test multiply operation
  test('POST /multiply should return correct product', async () => {
    const response = await request(app)
      .post('/multiply')
      .send({ a: 4, b: 5 })
      .expect(200);
    expect(response.body.result).toBe(20);
    expect(response.body.id).toBeDefined();
  });

  // Test divide operation
  test('POST /divide should return correct quotient', async () => {
    const response = await request(app)
      .post('/divide')
      .send({ a: 10, b: 2 })
      .expect(200);
    expect(response.body.result).toBe(5);
    expect(response.body.id).toBeDefined();
  });

  // Test divide by zero
  test('POST /divide should handle division by zero', async () => {
    const response = await request(app)
      .post('/divide')
      .send({ a: 10, b: 0 })
      .expect(400);
    expect(response.body.error).toBe('Division by zero');
  });
});