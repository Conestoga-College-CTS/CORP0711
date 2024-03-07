var x = 1;
var x = 2; // No error: 'x' can be redeclared with 'var'
x = 3; // 'x' can be updated
console.log(x); // Outputs: 3

if(1){
    var i = 12;
}
i = i + 1;
console.log(i); // Output: 13


let y = 1;
let y = 2; // Error: Cannot redeclare block-scoped variable 'y'

let z = 1;
z = 2; // 'z' can be updated
console.log(z); // Output: 2

const t = 1;
const t = 2; // Error: Cannot redeclare block-scoped variable 't'.

const pi = 3.14;
pi = 'pie'; // Error: Identifier 'u' has already been declared

// Contents of const object can be updated
const vehicle = { type: 'car', model: 'Toyota', color: 'black' };
vehicle.color = 'green'; // Works fine
console.log(vehicle); // Output: { type: 'car', model: 'Toyota', color: 'green' }

// Contents of const array can be updated
const steps = ['assembly', 'painting'];
steps.push('quality check'); // Works fine
console.log(steps); // Output: ['assembly', 'painting', 'quality check']