/**
 * JavaScript is a dynamically typed language, which means that the type of a variable is determined at runtime.
 * This means that you can reassign a variable to a different type of value without any issues.
 * This is in contrast to statically typed languages, where the type of a variable is determined at compile time.
 */

let myVariable; // Variable is declared but not assigned a value
console.log(myVariable); // Output: undefined
console.log(typeof myVariable + '\n');

myVariable = 5; // Now myVariable is treated as a number
console.log(myVariable); // Output: 5
console.log(typeof myVariable + '\n');

myVariable = "Hello, World!"; // Now myVariable is treated as a string
console.log(myVariable); // Output: "Hello, World!"
console.log(typeof myVariable + '\n');

myVariable = true; // Now myVariable is treated as a boolean
console.log(myVariable); // Output: true
console.log(typeof myVariable + '\n');

myVariable = { name: "Alice", age: 30 }; // Now myVariable is treated as an object
console.log(myVariable); // Output: { name: "Alice", age: 30 }
console.log(typeof myVariable + '\n');