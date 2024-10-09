class Car {
  #ade;
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.#ade = "asdfasdf";
  }

  display() {
    console.log(`This car is a ${this.brand} ${this.model}`);
  }

  static ad(){
    console.log('asdfasdf');
  }

  getAde(){
    return this.#ade;
  }
}

// Creating an object from the class
const myCar = new Car('Toyota', 'Corolla');
myCar.display(); // Output: This car is a Toyota Corolla

Car.ad();

console.log(myCar.brand);
console.log(myCar.model);
console.log(myCar.getAde());
// console.log(myCar.#ade);
