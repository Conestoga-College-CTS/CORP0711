// 'use strict';

const cars = [
  { model: 'Sedan', passedInspection: true },
  { model: 'SUV', passedInspection: false },
];

// Filter cars that passed inspection
const carsReadyForSale = cars.filter(function(car) {
  return car.passedInspection;
});

const carsReadyForSaleArrowFunction = cars.filter(car => car.passedInspection);

console.log(carsReadyForSale); // [ { model: 'Sedan', passedInspection: true } ]
console.log(carsReadyForSaleArrowFunction); // [ { model: 'Sedan', passedInspection: true } ]

const vehicles = [
  { model: 'Sedan', miles: 100000 },
  { model: 'SUV', miles: 200000 },
  { model: 'Truck', miles: 300000 },
];

// Filter vehicles with more than 100,000 miles
const vehiclesWithMoreThan100K = vehicles.filter(vehicle => vehicle.miles > 100000);

console.log(vehiclesWithMoreThan100K); // [ { model: 'SUV', miles: 200000 }, { model: 'Truck', miles: 300000 } ]