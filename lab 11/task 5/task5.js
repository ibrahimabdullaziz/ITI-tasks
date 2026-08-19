class Employee {
  #bonus = 1000;

  constructor(name, baseSalary) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getAnnualSalary() {
    return this.baseSalary * 12;
  }

  getTotalAnnualSalary() {
    return this.baseSalary * 12 + this.#bonus;
  }
}

class Manager extends Employee {
  getAnnualSalary() {
    return this.baseSalary * 12 * 1.1;
  }
}

const emp = new Employee("Ahmed", 5000);
const mgr = new Manager("Mona", 8000);

console.log("Employee Annual:", emp.getAnnualSalary());
console.log("Employee Total:", emp.getTotalAnnualSalary());
console.log("Manger Annual:", mgr.getAnnualSalary());
console.log("Manger Total:", mgr.getTotalAnnualSalary());
