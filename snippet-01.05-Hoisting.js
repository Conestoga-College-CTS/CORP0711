// var is hoisted - initialized with undefined
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

// let is hoisted - but not initialized
if (true) {
  console.log(c); // ReferenceError: Cannot access 'c' before initialization
  let c = 30;
}

// function hoisting
hello(); // "Hello, world!"

function hello() {
  console.log("Hello, world!");
}

// function expression assigned to variables are not hoisted 
goodbye(); // TypeError: goodbye is not a function

var goodbye = function() {
  console.log("Goodbye, world!");
};
