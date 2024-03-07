let result;
// Adding a number and a string - the number is coerced into a string
result = 5 + "5"; // result: "55"
// During Arithmetic operations (other than +) if one operands is number - the other 
// is coerced into a number
result = "10" - 5; // result: 5 
result = "10" * 5; // result: 50
result = "A" * 5; // result: NaN, (Not a Number)

// Logical operators like ||, &&, and ! coerce non-boolean operands to Boolean 
// but return the original value of the last evaluated operand
// For ||, if the first operand is falsy, returns the second operand. 
result = "5" || 0; // result: "5" because "5" is truthy, returns first operand
result = "5" || 1; // result: "5" because "5" is truthy, returns first operand
result = 0 || "5"; // result: "5" because "5" is truthy, returns second operand
result = 1 || "5"; // result: 1 because both are truthy, returns first operand
result = "4" || "5” // result: ”4" 

// For &&, if the first operand is truthy, JavaScript returns the second operand 
result = "5" && 1; // result: 1
result = "5" && 0; // result: 0
result = 1 && "5"; // result: "5"
result = 0 && "5"; // result: 0 
result = "4" && "5" // result: "5"

// For !, values are implicitly converted to boolean before being negated
// Falsy values
console.log(!false); // true
console.log(!0); // true
console.log(!""); // true
console.log(!null); // true
console.log(!undefined); // true
console.log(!NaN); // true

// Truthy values
console.log(!1); // false, because 1 is truthy
console.log(!"hello"); // false, because a non-empty string is truthy
console.log(![]); // false, because an empty array is truthy
console.log(!{}); // false, because an empty object is truthy
console.log(!(function(){})); // false, because a function is truthy

// Equality comparison with different types
// For ==, type coercion occurs, so different types can still be considered equal 
// if their coerced values are the same
result = "5" == 5; // result: true, Loose equality checks value ignoring the type
result = "5" == 5; // result: true, Loose equality checks value ignoring the type

// For ===, checks for value and type, so no coercion occurs
result = "5" === 5; // result: false, Strict equality checks both value and type
