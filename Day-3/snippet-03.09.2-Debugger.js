console.log("1: Start");

// Microtask (higher priority in event loop)
Promise.resolve().then(() => console.log("2: Promise resolved"));

// Macrotask (lower priority)
setTimeout(() => console.log("3: setTimeout executed"), 20000);

setImmediate(() => console.log("4: setImmediate executed"));

// Synchronous operation
console.log("5: End");
