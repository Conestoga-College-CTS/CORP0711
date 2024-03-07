// Undefine
let temperature; 
console.log(temperature); // Output: undefined

// Null
let emptyValue = null;

// Boolean
let isValid = true;

// Number
let price = 12.39; // Integers can range from 9007199254740991 to -9007199254740991

// BigInt - Limited by amount of memory available
let largeNumber = BigInt(9007199254740991);
let anotherLargeNumber = 9007199254740991n;

// String
let payload = 'Hello, World';

// Object
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function() {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  }
};

person.greet(); // Outputs: Hello, my name is John Doe.

// Array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]); // Outputs: Banana
fruits.push("Orange"); // Adds "Orange" to the end of the array

// Function
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Outputs: Hello, Alice!

// Date
let now = new Date();
console.log(now); // Outputs the current date and time

let specificDate = new Date("2024-01-01");
console.log(specificDate); // Outputs Tue Jan 01 2024 00:00:00 GMT+0000 (UTC) or similar, depending on the timezone

// RegExp
let pattern = /hello/;
let message = "hello world";
let result = pattern.test(message);
console.log(result); // Outputs: true