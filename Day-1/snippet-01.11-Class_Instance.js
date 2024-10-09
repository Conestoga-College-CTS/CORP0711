class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  
  display() {
    console.log(`This car is a ${this.brand} ${this.model}`);
  }
}

// Creating instances of the Car class
const car1 = new Car('Toyota', 'Corolla');
const car2 = new Car('Honda', 'Civic');
