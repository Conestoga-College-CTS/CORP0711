class BankAccount {
  #balance;
  
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }

  publicMethod(){
    console.log("Inside public method");
    this.#prvateMethod();
  }

  #prvateMethod(){
    console.log("Inside private method");
  }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // Output: 150
console.log(account.#balance); // Error: Private field '#balance' must be declared in an enclosing class
account.#privateMethod(); // Error:  Private field '#privateMethod' must be declared in an enclosing class
account.publicMethod();
