// 'use strict';

// In context of node.js, this refers to module.exports not global object
console.log("In context of node.js, this refers to module.exports not global object");
console.log("this === global -> " + (this === global)); // Output: false
console.log("this === module.exports -> " + (this === module.exports)); // Output: true
console.log(this); // Output: {}

// When this is used in a regular function, it will refer to the global object
function regularFunction() {
  console.log(this); // Output: {} or undefined for strict mode
  console.log("this === global -> " + (this === global)); // Output: true; unless in strict mode then it will be false
  console.log(this === module.exports); // Output: false
}

regularFunction();

// When this is used in a method of an object, it will refer to the object
const myObject = {
  name: 'Alice',
  myMethod: function() {
    console.log(`My name is ${this.name} `);
    console.log(this); // Output: { name: 'Alice', myMethod: [Function: myMethod] }
  }
};

myObject.myMethod();

// When this is used in a constructor function, it will refer to the object being created
function Car(make, model) {
  this.make = make;
  this.model = model;
}
const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.make); // Toyota

const myOtherCar = new Car('BMW', 'Z4');
console.log(myOtherCar.make); // BMW

// When this is used in an Arrow Function, it will refer to the parent scope
this.color = 'red'; // this refers to the global object

// function regularFunction() {
//   console.log(this);
// }

const arrowFunction = () => {
  console.log(this); // Output: { color: 'red' }
} 
arrowFunction(); 

const myAddress = {
  address: 'Ontario',
  myMethod: function() {
    const arrowFunction = () => {
      console.log(this); // Output: { address: 'Ontario', myMethod: [Function: myMethod] }
    };
    arrowFunction();
    console.log(this); // Output: { address: 'Ontario', myMethod: [Function: myMethod] }
  }
};

myAddress.myMethod(); // Output: { address: 'Ontario', myMethod: [Function: myMethod] }

// When used with bind, it will refer to the object passed as an argument
// When this is used with call or apply, it will refer to the object passed as an argument
function greet() {
  console.log(`Hello, I am ${this.name}`);
  console.log(this === global); // Output: false
}
const person = { name: 'John' };
const boundGreet = greet.bind(person);
boundGreet(); // Output: Hello, I am John

greet.call(person); // Output: Hello, I am John

const anotherPerson = { name: 'George' };
greet.apply(anotherPerson); // Output: Hello, I am George