class Product {
  #price;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  get price() {
    return this.#price;
  }

  set price(val) {
    if (typeof val === "number" && val > 0) {
      this.#price = val;
    } else {
      console.log(`invalid price: ${val}`);
    }
  }
}

const laptop = new Product("Laptop", 1500);
console.log("Initial Price:", laptop.price);

laptop.price = 2000;
console.log("Updated Price:", laptop.price);

laptop.price = -500;
console.log("Price after negative value:", laptop.price);
