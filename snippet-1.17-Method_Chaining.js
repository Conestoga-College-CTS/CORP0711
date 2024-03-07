const vehicles = [
  { 
    model: 'Sedan', 
    passedInspection: true, 
    parts: [
      { name: 'Brakes', price: 100 }, 
      { name: 'Battery', price: 200 }
    ] 
  },
  { 
    model: 'SUV', 
    passedInspection: false, 
    parts: [
      { name: 'Tires', price: 300 }
    ]
  },
  { 
    model: 'Truck', 
    passedInspection: true, 
    parts: [
      { name: 'Brakes', price: 100 },
      { name: 'Battery', price: 200 }, 
      { name: 'Tires', price: 300 }
    ] 
  },
];

// Get total cost of vehicle for vehicles that passed inspection using chaining the result should contain model name and total cost
const vehiclesReadyForSale = vehicles.filter(vehicle => vehicle.passedInspection).map(vehicle => {
  return {
    model: vehicle.model,
    totalCost: vehicle.parts.reduce((accumulator, part) => accumulator + part.price, 0)
  };
});
console.log(vehiclesReadyForSale);
// Output:
// [
//   { model: 'Sedan', totalCost: 300 },
//   { model: 'Truck', totalCost: 600 }
// ]