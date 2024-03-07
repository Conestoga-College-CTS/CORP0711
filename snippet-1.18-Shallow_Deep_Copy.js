const baseConfig = { 
  model: 'Sedan', 
  engine: 'V6', 
  features: ['AC', 'Navigation'],
  part: {
    name: 'Brakes',
    price: 100
  } 
};

// Shallow copy
const newConfig = Object.assign({}, baseConfig);

newConfig.model = 'Coupe';
newConfig.features.push('Sunroof'); // Adds element to array
newConfig.part.price = 200; // Updates the price of part in baseConfig

console.log(baseConfig);
// Output:
// {
//   model: 'Sedan',
//   engine: 'V6',
//   features: [ 'AC', 'Navigation', 'Sunroof' ],
//   part: { name: 'Brakes', price: 200 }
// }

console.log(newConfig);
// Output:
// {
//   model: 'Coupe',
//   engine: 'V6',
//   features: [ 'AC', 'Navigation', 'Sunroof' ]
//   part: { name: 'Brakes', price: 200 }
// }

// Deep copy
const deepCopy = JSON.parse(JSON.stringify(baseConfig));

deepCopy.model = 'Convertible';
deepCopy.features.push('Convertible Roof');
deepCopy.part.price = 300;

console.log(baseConfig);
// Output:
// {
//   model: 'Sedan',
//   engine: 'V6',
//   features: [ 'AC', 'Navigation', 'Sunroof' ],
//   part: { name: 'Brakes', price: 200 }
// }

console.log(deepCopy);
// Output:
// {
//   model: 'Convertible',
//   engine: 'V6',
//   features: [ 'AC', 'Navigation', 'Sunroof', 'Convertible Roof' ],
//   part: { name: 'Brakes', price: 300 }
// }
