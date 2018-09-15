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
 **/