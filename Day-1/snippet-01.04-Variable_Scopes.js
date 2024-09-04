// Global variable
var globalVar = "I'm a global variable";

function showGlobalVar() {
    console.log(globalVar); // Output: "I'm a global variable"
}

function demoScope() {
    // Function-scoped variable
    var functionVar = "I'm function scoped";

    // Block-scoped variable with 'let'
    if (true) {
        let blockVar = "I'm block scoped with 'let'";
        console.log(blockVar); // Output: "I'm block scoped with 'let'"
    }

    // 'var' inside a block, but accessible outside
    for (var i = 0; i < 1; i++) {
        var loopVar = "I'm declared with 'var' inside a loop, but I'm accessible outside it";
    }
    console.log(loopVar); // Output: "I'm declared with 'var' inside a loop, but I'm accessible outside it"
}

// Accessing global variable
console.log(globalVar); // Output: "I'm a global variable"

// Calling function to show global variable
showGlobalVar(); // Output: "I'm a global variable"

// Demonstrating function and block scope
demoScope();

// Trying to access function and block scoped variables from outside
// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined
// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
