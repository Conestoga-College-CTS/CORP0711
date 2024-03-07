// 'use strict';

// A JSON object representing a vehicle in a manufacturing plant
let vehicle = {  
  "carId": "VIN1234567890",
  "manufacturingSteps": ["Chassis Assembly", "Engine Installation", "Painting"],
  "model": "Sedan X",
  "productionStage": "Assembly",
  "assemblyLine": "Line 3",
  "scheduledCompletion": "2023-05-15T16:00:00Z",
  "qualityChecks": {
    "paintInspection": true,
    "alignmentCheck": false,
    "electronicsTest": "Pending",
    "safetyInspection": "Scheduled"
  },
  "components": [
    {
      "componentId": "ENG4567891",
      "componentType": "Engine",
      "status": "Installed",
      "installDate": "2023-05-10T09:30:00Z"
    }
  ]
}

// Literal Notation
let car = { make: 'Toyota', model: 'Corolla' };

// Constructor Function
// let car = new Object(); 
// car.make = 'Toyota’;

// Object.create
// let car = Object.create(null);
// car.make = 'Toyota’;

// Accessing properties of an object
console.log(car.make); // Toyota
console.log(car['model']); // Corolla

// Adding new properties to an object
car.year = 2020;
car['color'] = 'black';
console.log(car.year); // 2020

// Modifying properties
car['make'] = 'BMW';
car.model = 'Z4';
console.log(car.make); // BMW

// Deleting properties
delete car.model
car.make = undefined;
console.log(car.model); // undefined
console.log(car.make); // undefined

// Destroying an object
car = null
console.log(car); // null