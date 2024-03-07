let myVariable; // Variable is declared but not assigned a value
console.log(myVariable); // Output: undefined

myVariable = 5; // Now myVariable is treated as a number
console.log(myVariable); // Output: 5

myVariable = "Hello, World!"; // Now myVariable is treated as a string
console.log(myVariable); // Output: "Hello, World!"

myVariable = true; // Now myVariable is treated as a boolean
console.log(myVariable); // Output: true

myVariable = { name: "Alice", age: 30 }; // Now myVariable is treated as an object
console.log(myVariable); // Output: { name: "Alice", age: 30 }