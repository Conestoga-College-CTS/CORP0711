// 'use strict';

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function(number) {
  return number * number;
});

const squaredNumbersUsingArrowFunction = numbers.map(number => number * number);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
console.log(squaredNumbersUsingArrowFunction); // Output: [1, 4, 9, 16, 25]

const parts = [
  { name: 'engine', price: 1000 },
  { name: 'door', price: 200 },
];

// Using map to update the price of each part by 5% without using arrow function
const updatedParts = parts.map(function(part) {
  return {
    name: part.name,
    price: part.price * 1.05 // 5% price increase
  };
});

// Using map to update the price of each part by 5% using arrow function
const updatedPartsUsingArrowFunction = parts.map(part => ({
  name: part.name,
  price: part.price * 1.05 // 5% price increase
}));

console.log(updatedParts);
console.log(updatedPartsUsingArrowFunction);
// Output:
// [ { name: 'engine', price: 1050 }, { name: 'door', price: 210 } ]
