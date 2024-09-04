// simpleCalculator.js

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
      console.log('Error: Cannot divide by zero');
      return null;
  }
  return a / b;
}

function main() {
  const numbers = [10, 5, 0]; // Array of numbers to use in operations
  const y = 2; // Fixed number to operate with

  for (let i = 0; i < numbers.length; i++) {
      const x = numbers[i];

      console.log(`\nCalculating with ${x} and ${y}:`);
      console.log(`Addition: ${add(x, y)}`);
      console.log(`Subtraction: ${subtract(x, y)}`);
      console.log(`Multiplication: ${multiply(x, y)}`);
      const divisionResult = divide(x, y);
      if (divisionResult !== null) {
          console.log(`Division: ${divisionResult}`);
      }
  }
}

// Run the main function
main();