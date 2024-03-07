// Simulated function to perform a task in the car manufacturing process
function performTask(taskName, callback) {
  console.log(`Starting task: ${taskName}`);
  setTimeout(() => {
    callback(null, `${taskName} completed`);
  }, 2000);
}

// Begin the car manufacturing process
performTask('Chassis assembly', function (err, result) {
  if (err) {
    return console.log('Error in', err);
  }
  console.log(result);

  performTask('Engine installation', function (err, result) {
    if (err) {
      return console.log('Error in', err);
    }
    console.log(result);

    performTask('Interior setup', function (err, result) {
      if (err) {
        return console.log('Error in', err);
      }
      console.log(result);

      performTask('Quality check', function (err, result) {
        if (err) {
          return console.log('Error in', err);
        }
        console.log(result);
      });
    });
  });
});