let result;
// Adding a number and a string - the number is coerced into a string
console.log('\nAdding a number and a string - the number is coerced into a string');
result = 10 + "5"; // result: "55"
console.log('10 + "5" = ' + result);
console.log(typeof result + '\n');

// During Arithmetic operations (other than +) if one operands is number - the other is coerced into a number
console.log('\nDuring Arithmetic operations (other than +) if one operands is number - the other is coerced into a number');
result = "10" - 5; // result: 5 
console.log('"10" - 5 = ' + result); // result: 5
console.log(typeof result + '\n');

result = "10" * 5; // result: 50
console.log('"10" * 5 = ' + result);
console.log(typeof result + '\n');

result = "A" * 5; // result: NaN, (Not a Number)
console.log('"A" * 5 = ' + result);
console.log(typeof result + '\n');

// Logical operators like ||, &&, and ! coerce non-boolean operands to Boolean 
// || Returns the first truthy value or the last value if all are falsy. 

console.log('Logical operators like ||, &&, and ! coerce non-boolean operands to Boolean');
console.log('\n|| Returns the first truthy value or the last value if all are falsy');
result = "5" || 0; // result: "5" because "5" is truthy, returns first operand
console.log('"5" || 0 = ' + result);
console.log(typeof result + '\n');

result = "5" || 1; // result: "5" because "5" is truthy, returns first operand
console.log('"5" || 1 = ' + result);
console.log(typeof result + '\n');

result = 1 || "5"; // result: 1 because both are truthy, returns first operand
console.log('1 || "5" = ' + result);
console.log(typeof result + '\n');

result = "4" || "5” // result: ”4" 
console.log('"4" || "5” = ' + result);
console.log(typeof result + '\n');

result = 0 || "5"; // result: "5" because "5" is truthy, returns second operand
console.log('0 || "5" = ' + result);
console.log(typeof result + '\n');

result = 0 || undefined || false; // result: false because it is the last value if all are falsley
console.log('0 || undefined || false = ' + result);
console.log(typeof result + '\n');

// A practicle example for the usage of || operator is to provide default values
console.log('A practicle example for the usage of || operator is to provide default values');
function greet(name) {
  name = name || "Guest";
  console.log("Hello, " + name + "!");
}

greet("Student"); // Output: Hello, Student!
greet(); // Output: Hello, Guest!

// && Returns the first falsy value or the last value if all are truth
console.log('\n&& Returns the first falsy value or the last value if all are truth');
result = "5" && 1; // result: 1
console.log('"5" && 1 = ' + result);
console.log(typeof result + '\n');

result = "5" && 0; // result: 0
console.log('"5" && 0 = ' + result);
console.log(typeof result + '\n');

result = 1 && "5"; // result: "5"
console.log('1 && "5" = ' + result);
console.log(typeof result + '\n');

result = 0 && "5"; // result: 0 
console.log('0 && "5" = ' + result);
console.log(typeof result + '\n');

result = 0 && "5" && undefined; // result: 0 
console.log('0 && "5" && undefined = ' + result);
console.log(typeof result + '\n');

result = "4" && "5" // result: "5"
console.log('"4" && "5 = ' + result);
console.log(typeof result + '\n');

// A practicle example for the usage of && operator is to check for null or undefined values
console.log('A practicle example for the usage of && operator is to check for null or undefined values');
function greet_someone(name) {
  name && console.log("Hello, " + name + "!");
}
greet_someone("Student"); // Output: Hello, Student!
greet_someone(); // Output: nothing


// For !, values are implicitly converted to boolean before being negated
// Falsy values
console.log('\nFor !, values are implicitly converted to boolean before being negated');
console.log('Negated falsy values:');
console.log(!false); // true
console.log(!0); // true
console.log(!""); // true
console.log(!null); // true
console.log(!undefined); // true
console.log(!NaN); // true

// Truthy values
console.log('Negated truthy values:')
console.log(!1); // false, because 1 is truthy
console.log(!"hello"); // false, because a non-empty string is truthy
console.log(![]); // false, because an empty array is truthy
console.log(!{}); // false, because an empty object is truthy
console.log(!(function(){})); // false, because a function is truthy

// Equality comparison with different types
// For ==, type coercion occurs, so different types can still be considered equal 
// if their coerced values are the same
console.log('\nEquality comparison with different types');
console.log('For ==, type coercion occurs, so different types can still be considered equal');
result = "5" == 5; // result: true, Loose equality checks value ignoring the type
console.log('"5" == 5 = ' + result);
console.log(typeof result + '\n');

result = 5 == 5; // result: true
console.log('5 == 5;  = ' + result);
console.log(typeof result + '\n');

// For ===, checks for value and type, so no coercion occurs
console.log('\nFor ===, checks for value and type, so no coercion occurs');
result = "5" === 5; // result: false, Strict equality checks both value and type
console.log('"5" === 5 = ' + result);
console.log(typeof result + '\n');

result = 5 === 3+2; // result: false, Strict equality checks both value and type
console.log('5 === 3+2 = ' + result);
console.log(typeof result + '\n');
