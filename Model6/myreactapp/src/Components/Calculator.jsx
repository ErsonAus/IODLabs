import React, { useState } from 'react';

// Calculator component that performs basic arithmetic operations
const Calculator = () => {
  // State to store the first number
  const [firstNumber, setFirstNumber] = useState('');
  
  // State to store the second number
  const [secondNumber, setSecondNumber] = useState('');
  
  // State to store the selected operator (+, -, *, /)
  const [operator, setOperator] = useState('');
  
  // State to store the calculated result
  const [result, setResult] = useState('');

  // Function to handle number input for the first number
  const handleFirstNumberChange = (e) => {
    setFirstNumber(e.target.value);
  };

  // Function to handle number input for the second number
  const handleSecondNumberChange = (e) => {
    setSecondNumber(e.target.value);
  };

  // Function to handle operator selection
  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  // Function to calculate the result based on the two numbers and operator
  const calculate = () => {
    // Convert string inputs to numbers for calculation
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    // Check if both numbers are valid
    if (isNaN(num1) || isNaN(num2)) {
      setResult('Please enter valid numbers');
      return;
    }

    // Check if an operator has been selected
    if (!operator) {
      setResult('Please select an operator');
      return;
    }

    // Variable to store the calculation result
    let calculatedResult;

    // Perform calculation based on the selected operator
    switch (operator) {
      case '+':
        calculatedResult = num1 + num2;
        break;
      case '-':
        calculatedResult = num1 - num2;
        break;
      case '*':
        calculatedResult = num1 * num2;
        break;
      case '/':
        // Check for division by zero
        if (num2 === 0) {
          setResult('Cannot divide by zero');
          return;
        }
        calculatedResult = num1 / num2;
        break;
      default:
        setResult('Invalid operator');
        return;
    }

    // Set the result state with the calculated value
    setResult(calculatedResult);
  };

  // Function to reset all fields and clear the calculator
  const handleReset = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperator('');
    setResult('');
  };

  // Render the calculator UI
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Basic Calculator</h1>
      
      {/* Input field for the first number */}
      <input
        type="number"
        placeholder="Enter first number"
        value={firstNumber}
        onChange={handleFirstNumberChange}
        style={{ padding: '8px', marginRight: '10px' }}
      />

      {/* Dropdown to select the operator */}
      <select
        value={operator}
        onChange={handleOperatorChange}
        style={{ padding: '8px', marginRight: '10px' }}
      >
        <option value="">Select Operator</option>
        <option value="+">+ (Addition)</option>
        <option value="-">- (Subtraction)</option>
        <option value="*">* (Multiplication)</option>
        <option value="/">÷ (Division)</option>
      </select>

      {/* Input field for the second number */}
      <input
        type="number"
        placeholder="Enter second number"
        value={secondNumber}
        onChange={handleSecondNumberChange}
        style={{ padding: '8px', marginRight: '10px' }}
      />

      {/* Button to trigger the calculation */}
      <button
        onClick={calculate}
        style={{
          padding: '8px 16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '10px'
        }}
      >
        Calculate
      </button>

      {/* Button to reset all fields */}
      <button
        onClick={handleReset}
        style={{
          padding: '8px 16px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Reset
      </button>

      {/* Display the result */}
      {result && (
        <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
          Result: {result}
        </div>
      )}
    </div>
  );
};

// Export the Calculator component for use in other files
export default Calculator;