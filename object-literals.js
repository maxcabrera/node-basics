const person = {
  name: 'Jon',
  lastName: 'Doe',
  greet: function() {
    console.log(`${this.name} ${this.lastName}`);
  }
}

person.greet()
console.log(person.name)
