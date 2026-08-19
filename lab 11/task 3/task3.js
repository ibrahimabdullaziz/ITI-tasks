class Vehicle {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  display() {
    return `Vehicle: ${this.brand} (${this.year})`;
  }
}

class Car extends Vehicle {
  constructor(brand, year, model) {
    super(brand, year);
    this.model = model;
  }

  display() {
    return `${super.display()} - Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2022, "Corolla");
console.log(myCar.display());
