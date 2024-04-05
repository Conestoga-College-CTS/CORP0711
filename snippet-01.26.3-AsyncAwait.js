// This snippets shows how to use async/await to handle asynchronous tasks.
// A long running task is simulated using setTimeout.
// Notice how the runAsyncTasks_1 and runAsyncTasks_2 functions are called one after the other.
// The one that takes less time to complete will be executed first 
// while the other is waiting.

async function simulateLongTask(duration) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(`Task completed in ${duration}ms`);
      }, duration);
  });
}

// Since simulateLongTask is an async function, 
// it needs to be called inside an async function

async function runAsyncTasks_1(duration) {
  try {
      const result = await simulateLongTask(duration); // this will take 3 seconds
      console.log(result);
      console.log('This line will be printed after the simulateLongTask is completed - 1');
  } catch (error) {
      console.error(error);
  }
}

async function runAsyncTasks_2(duration) {
  try {
      const result = await simulateLongTask(duration); 
      console.log(result);
      console.log('This line will be printed after the simulateLongTask is completed - 2');
  } catch (error) {
      console.error(error);
  }
}

console.log('This line is printed first');

runAsyncTasks_1(3000); // this will take 3 seconds

console.log('This line will be printed before the simulateLongTasks are completed - 1');

runAsyncTasks_2(6000); // this will take 6 seconds

console.log('This line will be printed before the simulateLongTasks are completed - 2');

// To run the two runAsyncTasks functions inside another async function
// to make sure they are executed one after the other
/*
async function runAllAsyncTasks() {
  await runAsyncTasks_1(3000); // this will take 3 seconds
  await runAsyncTasks_2(6000); // this will take 6 seconds
}
*/