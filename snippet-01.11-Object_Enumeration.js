// 'use strict';

// Literal Notation
let car = { make: 'Toyota', model: 'Corolla', color: 'red', year: 2020};

// Get array of object keys
let keys = Object.keys(car);
console.log(keys); // [ 'make', 'model', 'color', 'year' ]

// Get array of object values
let values = Object.values(car);
console.log(values); // [ 'Toyota', 'Corolla', 'red', 2020 ]

// Get array of object entries
let entries = Object.entries(car);
console.log(entries); // [ [ 'make', 'Toyota' ], [ 'model', 'Corolla' ], [ 'color', 'red' ], [ 'year', 2020 ] ]

// Use Case: Iterate over object properties
for (const [key, values] of Object.entries(car)) {
  console.log(`${key}: ${values}`);
}
// Output:
// make: Toyota
// model: Corolla
// color: red
// year: 2020

// Use Case: Iterate over object properties
for (const values of Object.values(car)) {
  console.log(values);
}
// Output:
// Toyota
// Corolla
// red
// 2020
