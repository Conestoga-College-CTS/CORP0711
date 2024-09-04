// hello.js

// Print a message to the console
console.log("Hello, JavaScript!");

// New line 
// \n moves the cursor to the beginning of the next line
console.log("Hello, \nJavaScript!");

// Carriage Return 
// \r moves the cursor to the beginning of the current line
console.log("This gets replaced \rThis is the new text");

// Basic arithmetic operation
let a = 5;
let b = 10;
let sum = a + b;

// Print the result of the operation 
console.log('Sum is: ' + sum);

// Print the result of the operation using template literals
console.log(`Sum of ${a} and ${b} is ${sum}`);

// Print today's date with a message saying today
console.log('Today is: ' + new Date());

/**
 * Function to greet a person
 * @param {string} name - The name of the person
 * @returns {string} - The greeting message
 */
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Student"));