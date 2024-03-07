// 'use strict';

// Array containing cost of manufacturing parts
const parts = [
  { name: 'Brakes', price: 100 },
  { name: 'Battery', price: 200 },
  { name: 'Tires', price: 300 },
];

// Reduce the parts array to get the total cost of manufacturing
const totalCost = parts.reduce(function(accumulator, part) {
  return accumulator + part.price;
}, 0);

console.log(totalCost); // 600
