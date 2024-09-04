// Import the 'fs' module which provides an API for interacting with the file system.
const fs = require('fs');

// Log the initial step to the console.
console.log('Step 1: Start Program');

// Schedule a function to be called after 1 second (1000 milliseconds).
setTimeout(() => {
    // This message is logged after the timer expires.
    console.log('Step 3: Timer callback executed');
}, 1000);

// Start reading the contents of 'example.txt' file in UTF-8 encoding.
fs.readFile('example.txt', 'utf8', (err, data) => {
    // This function is a callback that will be executed once the file reading is completed.

    // Check for any error that occurred during the file reading.
    if (err) throw err;

    // Log this message after the file has been successfully read.
    console.log('Step 4: File read callback executed');
});

// Log the final step to the console.
console.log('Step 2: End of Program');

/**
 * Explanation:
 *
 * When this program is executed, it follows these steps:
 *
 * 1. The 'fs' module is required at the beginning to enable file system operations.
 * 2. 'Step 1: Start Program' is logged immediately because it's a synchronous operation.
 * 3. The `setTimeout` function schedules the callback to be executed after 1000 milliseconds (1 second), but does not block the execution.
 * 4. The `fs.readFile` function starts reading the file 'example.txt'. It is an asynchronous operation, so the callback is registered but not executed immediately.
 * 5. 'Step 2: End of Program' is logged next because it is also a synchronous operation.
 * 6. After the synchronous code has finished executing, the event loop picks up the asynchronous callbacks.
 * 7. The timer callback ('Step 3: Timer callback executed') will be executed after 1 second.
 * 8. The file read callback ('Step 4: File read callback executed') will be executed once the file reading is completed.
 *
 * The actual order of 'Step 3' and 'Step 4' depends on which asynchronous operation completes first. Generally, file reading might complete faster than 1 second, but it's not guaranteed.
 */

// Outputs:
// Step 1: Start Program
// Step 2: End of Program
// Step 4: File read callback executed (if file reading completes within 1 second)
// Step 3: Timer callback executed (after 1 second)
// 
// Or (if file reading takes longer than 1 second):
// Step 1: Start Program
// Step 2: End of Program
// Step 3: Timer callback executed
// Step 4: File read callback executed

