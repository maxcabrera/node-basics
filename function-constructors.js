const Person = function(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

//Adding properties using prototype
Person.prototype.greet = function() {
  console.log(`Hello ${this.name} ${this.lastName}`);
}

const jon = new Person('Jon',  'Doe');
const susan = new Person('Susan',  'Doe');
console.log(jon.name)
console.log(jon.greet())
console.log(susan.greet())
console.log(susan.__proto__ === jon.__proto__)

