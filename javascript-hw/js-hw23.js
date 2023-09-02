//1
class Account {
  constructor({ login, email }) {
    this.login = login;
    this.email = email;
  }
  getInfo() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  }
}
console.log(Account.prototype.getInfo); // function
const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});
poly.getInfo(); // Login: Poly, Email: poly@mail.com

//2

class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
  }
}
const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});
mango.getInfo(); // User Mango is 2 years old and has 20 followers
const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});
poly.getInfo(); // User Poly is 3 years old and has 17 followers
//3
