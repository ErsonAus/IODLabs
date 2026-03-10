// Assuming this is your server file, e.g., server.js or Exercise2.js
// Add these routes based on the existing 'add' route structure
// For subtract route
app.get('/subtract/:num1/:num2', (req, res) => {
  // Parse the parameters as floats
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  // Calculate the result
  const result = num1 - num2;
  // Send the result as a string
  res.send(result.toString());
});

// For multiply route
app.get('/multiply/:num1/:num2', (req, res) => {
  // Parse the parameters as floats
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  // Calculate the result
  const result = num1 * num2;
  // Send the result as a string
  res.send(result.toString());
});

// For divide route
app.get('/divide/:num1/:num2', (req, res) => {
  // Parse the parameters as floats
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  // Check for division by zero
  if (num2 === 0) {
    // Send an error message if dividing by zero
    res.send('Error: Division by zero');
  } else {
    // Calculate the result
    const result = num1 / num2;
    // Send the result as a string
    res.send(result.toString());
  }
});