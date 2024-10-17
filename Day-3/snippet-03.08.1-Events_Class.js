const UserEvent = require('./snippet-03.08.2-UserEvent');

// Creating an instance of the User class
const user = new UserEvent();

// Listening for 'login' events
user.on('login', (userName) => {
  console.log(`Welcome message for ${userName}`);
});

// Listening for 'logout' events
user.on('logout', (userName) => {
  console.log(`Goodbye message for ${userName}`);
});

// Listening for 'firstLogin' events using once
user.once('firstLogin', (userName) => {
  console.log(`${userName} has logged in for the first time`);
});

// Error event handling
user.on('error', (err) => {
  console.error('An error occurred:', err);
});

// Simulating user actions
try {
  user.login('JohnDoe');
  user.logout('JohnDoe');
  user.login('JaneDoe');
  user.login('JohnDoe'); // This won't trigger 'firstLogin' again for JohnDoe
} catch (err) {
  user.emit('error', err);
}