//Require another module
const billingual = require('./greetings')

billingual.english()
billingual.spanish()

/**
 * Patterns to export stuff
 */
/**
    const greet = function() {
      console.log('hello')
    }

    module.exports = greet;

    module.exports.greet = greet

    const Person = function() {
      this.name = "Hacker"
    }

    module.exports = new Person();
    //Using this will only create 1 instance of the object
    //regarless of the amount of times required

    //To avoid this
    module.exports = Person
 **/