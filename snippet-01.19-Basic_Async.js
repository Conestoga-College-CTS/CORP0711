const fs = require('fs');

console.log('Step 1: Start Program');

setTimeout(() => {
    console.log('Step 3: Timer callback executed');
}, 1000);

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Step 4: File read callback executed');
});

console.log('Step 2: End of Program');

// Outputs:
// Step 1: Start Program
// Step 2: End of Program
// Step 4: File read callback executed
// Step 3: Timer callback executed
// (or)
// Step 1: Start Program
// Step 2: End of Program
// Step 3: Timer callback executed
// Step 4: File read callback executed

