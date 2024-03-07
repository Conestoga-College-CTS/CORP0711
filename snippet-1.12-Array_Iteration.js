// 'use strict';

// Array containing different manufacturing steps
let manufacturingSteps = [
  "Chassis Assembly", 
  "Engine Installation", 
  "Painting", 
  "Electronics Installation", 
  "Quality Check"
];

// Iterate over the array and print each step using forEach
manufacturingSteps.forEach(
  (step, index) => console.log(`Step: ${index + 1} : ${step}`)
);

// Iterate over the array and print each step using for
for (let i = 0; i < manufacturingSteps.length; i++) {
  console.log(`Step: ${i + 1} : ${manufacturingSteps[i]}`);
}

// Iterate over the array and print each step using for...of
let i = 1;
for (let step of manufacturingSteps) {
  console.log(`Step: ${i} : ${step}`);
  i++;
}

// Output:
// Step: 1 : Chassis Assembly
// Step: 2 : Engine Installation
// Step: 3 : Painting
// Step: 4 : Electronics Installation
// Step: 5 : Quality Check



let vehicles = [
  {
    "name": "Car",
    "model": "Model S",
    "manufacturer": "Tesla",
    "year": 2020,
    "isElectric": true,
    "mileage": 15000,
    "lastServiced": "2021-01-01"
  },
  {
    "name": "Motorcycle",
    "model": "Ninja",
    "manufacturer": "Kawasaki",
    "year": 2019,
    "isElectric": false,
    "mileage": 5000,
    "lastServiced": "2021-06-01"
  }
];


// Get list of models using forEach form vehicles array
let models = [];
vehicles.forEach(vehicle => models.push(vehicle.model));
console.log(models); // [ 'Model S', 'Ninja' ]



