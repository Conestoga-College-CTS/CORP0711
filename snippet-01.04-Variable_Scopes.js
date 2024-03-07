var globalVar = "I'm a global variable";

function showGlobalVar() {
    console.log(globalVar); // Output: "I'm a global variable"
}  

function demoFunctionScope() {
    var red = "I'm function scoped and only accessible within this function";
    
    for (var i = 0; i < 1; i++) {
        var green = "I'm declared with 'var' inside a for loop block, but I'm accessible outside it";
    }
    console.log(green); // Output: "I'm declared with 'var' inside a for loop block, but I'm accessible outside it"

    if (true) {
        let blue = "I'm block scoped with 'let', only accessible within this if block";
        console.log(blue); // Output: "I'm block scoped with 'let', only accessible within this if block"
    }
    console.log(blue); // Uncaught ReferenceError: blue is not defined
}

console.log(globalVar); // Output: "I'm a global variable"

showGlobalVar(); // Output: "I'm a global variable"
demoFunctionScope();

console.log(red); // Uncaught ReferenceError: red is not defined
console.log(blue); // Uncaught ReferenceError: blue is not defined outside of the function