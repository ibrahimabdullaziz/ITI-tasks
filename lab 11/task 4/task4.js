class User {
  constructor(name) {
    this.name = name;
  }

  login() {
    return `${this.name} logged in`;
  }

  static getSystemRole() {
    return "Regular User";
  }
}

class Admin extends User {
  static getSystemRole() {
    return "Administrator";
  }
}

const user = new User("Ali");
const admin = new Admin("Sara");

console.log(user.login());
console.log(admin.login());

console.log("User Role:", User.getSystemRole());
console.log("Admin Role:", Admin.getSystemRole());

// i put try catch because it will crash :)
try {
  console.log(user.getSystemRole());
} catch (err) {
  console.log(err.message);
}
