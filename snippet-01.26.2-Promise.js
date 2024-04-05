// This snippets shows how to use Promises to handle asynchronous tasks.
// A long running task is simulated using setTimeout.
// The simulateLongTask function returns a Promise object.

function simulateLongTask(duration){
  // For Promis to work, we need to return a new Promise object
  // The Promise object takes a function as an argument
  // The function takes two arguments, resolve and reject
  // Resolve is a function that is called when the task is completed successfully
  // Reject is a function that is called when the task is completed with an error
  return new Promise((resolve) => {
      // The long running task is simulated using setTimeout
      setTimeout(() => {
          resolve(`Task completed in ${duration}ms`);
      }, duration);
  });
}

console.log('This line is printed first');
simulateLongTask(2000)
  .then((result) => {
    console.log(result)
    console.log('This line will be printed after the simulateLongTask is completed');
  })
  .catch((error) => {
    console.error(error)
  });

console.log('This line will be printed before the simulateLongTask is completed');