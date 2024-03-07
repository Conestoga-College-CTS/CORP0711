// Passing by Value
let x = 10;

function increaseByTen(value) {
  value = value + 10;
  console.log(value);
}

increaseByTen(x); // Output: 20

console.log(x); // Output: 10

// Passing by Reference
let obj = { a: 1 };

function modifyObject(myObj) {
  myObj.a = 2;
  console.log(myObj); // Output: {a: 2}
}

modifyObject(obj);
console.log(obj); // Output: {a: 2}

let array = [1, 2, 3];

function addElement(myArray) {
  myArray.push(4); // This modification affects the original array
  console.log(myArray); // Output: [1, 2, 3, 4]
}

addElement(array);
console.log(array); // Output: [1, 2, 3, 4]