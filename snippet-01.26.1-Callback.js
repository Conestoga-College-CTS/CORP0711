// This snippet is a simple callback example. 
// A long running task is simulated using setTimeout. 
// The simulateLongTask function takes two arguments: duration and callback. 
// The callback function is called when the task is completed. 


function simulateLongTask(duration, callback) {
  // The long running task is simulated using setTimeout
  setTimeout(() => {
      callback(null, `Task completed in ${duration}ms`);
  }, duration);
}

console.log('This line is printed first');

simulateLongTask(2000, (error, result) => {
  if (error) {
      console.error(error);      
  } else {
      console.log(result);
      console.log('This line will be printed after the simulateLongTask is completed');
      // Another task which needs be done after the simulateLongTask is completed will be add here
      // This will result in callback hell
  }
});

console.log('This line will be printed before the simulateLongTask is completed');