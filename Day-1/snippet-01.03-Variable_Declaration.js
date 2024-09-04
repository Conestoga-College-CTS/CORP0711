// Example demonstrating variable declaration and reassignment using var, let, and const in JavaScript

console.log("Using 'var' to declare a variable:");
var x = 1; // 'x' is declared and assigned the value 1
console.log("x is initialized to:", x); // Outputs: 1

var x = 2; // No error: 'x' can be redeclared with 'var'
console.log("x is redeclared and updated to:", x); // Outputs: 2

x = 3; // 'x' can be updated
console.log("x is updated to:", x); // Outputs: 3

// 'var' variables are function-scoped or globally scoped, not block-scoped
if (1) {
    var i = 12; // 'i' is declared inside the if block, but it is function-scoped
    console.log("i inside if block is initialized to:", i); // Outputs: 12
}
i = i + 1; // 'i' is accessible outside the block and is updated
console.log("i is incremented by 1, now i is:", i); // Outputs: 13

console.log("\nUsing 'let' to declare a block-scoped variable:");
let y = 1; // 'y' is declared and assigned the value 1
console.log("y is initialized to:", y); // Outputs: 1

// let y = 2; // Error: Cannot redeclare block-scoped variable 'y'
y = 2; // 'y' can be updated
console.log("y is updated to:", y); // Outputs: 2

console.log("\nUsing 'const' to declare a block-scoped constant variable:");
const t = 1; // 't' is declared and assigned the value 1
console.log("t is initialized to:", t); // Outputs: 1

// const t = 2; // Error: Cannot redeclare block-scoped variable 't'
// t = 3; // Error: Cannot reassign a constant variable 't'

const pi = 3.14; // 'pi' is declared and assigned the value 3.14
console.log("pi is initialized to:", pi); // Outputs: 3.14
// pi = 'pie'; // Error: Cannot reassign a constant variable 'pi'

// However, the contents of a const object can be updated
console.log("\nHowever, the contents of a const object and array can be updated:");
const vehicle = { type: 'car', model: 'Toyota', color: 'black' }; // 'vehicle' is declared and assigned an object
console.log("Initial vehicle object:", vehicle); // Outputs: { type: 'car', model: 'Toyota', color: 'black' }
vehicle.color = 'green'; // Works fine: properties of a const object can be updated
console.log("Updated vehicle object:", vehicle); // Outputs: { type: 'car', model: 'Toyota', color: 'green' }

// Contents of a const array can be updated
const steps = ['assembly', 'painting']; // 'steps' is declared and assigned an array
console.log("Initial steps array:", steps); // Outputs: ['assembly', 'painting']
steps.push('quality check'); // Works fine: elements can be added to a const array
console.log("Updated steps array:", steps); // Outputs: ['assembly', 'painting', 'quality check']
