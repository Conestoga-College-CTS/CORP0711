const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Handler for the 'login' event
eventEmitter.on('login', (user) => {
  console.log(`${user} logged in`);
});

// Handler for the 'logout' event using a named function
const logoutHandler = (user) => {
  console.log(`${user} logged out`);
};
eventEmitter.on('logout', logoutHandler); 

// Emitting the 'login' event for a user
eventEmitter.emit('login', 'JohnDoe');

// Emitting the 'logout' event for a user
eventEmitter.emit('logout', 'JaneDoe');

eventEmitter.once('firstLogin', (user) => {
  console.log(`${user} has logged in for the first time`);
});

// This will trigger the 'firstLogin' event handler
eventEmitter.emit('firstLogin', 'NewUser');

// This will not trigger the 'firstLogin' event handler again
eventEmitter.emit('firstLogin', 'AnotherUser');

// Removing the event listener
eventEmitter.removeListener('logout', logoutHandler);

// Emitting the 'logout' event for a user
eventEmitter.emit('logout', 'JohnDoe');
