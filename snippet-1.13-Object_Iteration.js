// 'use strict';

let manufacturingStep = {
  "stepId": "ENG1234567890",
  "stepName": "Engine Installation",
  "stepType": "Assembly",
  "stepDuration": "3 hours",
  "stepStatus": "Pending"
};

// Iterate over the object and print each property using forEach
Object.keys(manufacturingStep).forEach(
  (key) => console.log(`${key}: ${manufacturingStep[key]}`)
);

// Iterate over the object and print each property using for...in
for (let key in manufacturingStep) {
  console.log(`${key}: ${manufacturingStep[key]}`);
} 

// Iterate over the object using for...of and enumeration
for (let [key, value] of Object.entries(manufacturingStep)) {
  console.log(`${key} : ${value}`);
}

// Output:
// stepId: ENG1234567890
// stepName: Engine Installation
// stepType: Assembly
// stepDuration: 3 hours
// stepStatus: Pending

