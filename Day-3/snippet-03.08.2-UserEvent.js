const EventEmitter = require('events');

// Extending EventEmitter to create a custom User class
class UserEvent extends EventEmitter {
  constructor() {
    super();
    this.usersLoggedInFirstTime = new Set(); // Using a Set to store unique user names
  }

  login(userName) {
    // Emit 'firstLogin' only if the user hasn't logged in before
    if (!this.usersLoggedInFirstTime.has(userName)) {
      this.emit('firstLogin', userName);
      this.usersLoggedInFirstTime.add(userName);
    }
    console.log(`${userName} logged in`);
    this.emit('login', userName);
  }

  logout(userName) {
    console.log(`${userName} logged out`);
    this.emit('logout', userName);
  }
}

module.exports = UserEvent;

