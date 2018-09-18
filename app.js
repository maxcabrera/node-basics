const a = require('./greetings');
console.log('***************')
console.log(a)
console.log('***************')

/** Native events **/
const Events = require('events')
class myEmitter extends Events {}
const emtr = new myEmitter()

emtr.on('event', () => console.log('Native events: Event just happened'))
emtr.emit('event')

/** Custom Events emitter */
const Emtr = require('./events/event-emitter')
const emitter = new Emtr()
emitter.on('greet', () => console.log("Hello world!"))
emitter.on('greet', () => console.log("Hello jungle!"))

console.log('setting 3 seconds timeout...')
setTimeout(() => {
  console.log('**** ..after 3 seconds -> Event Emitter:')
  emitter.emit("greet")
  console.log('*************')
}, 3000)


const util = require('util')

const Person = function() {
 this.name = "Jon"
 this.lastName = "Doe"
}

Person.prototype.greet = function() {
  console.log(`Hello ${this.name}`)
}

const Police = function() {
 Person.call(this)
 this.badge = 123
}

util.inherits(Police, Person)
const cop = new Police()
cop.greet()

class Soya {
 constructor() {
  this.name ="soya"
 }

 hi() {
  console.log(`Hello ${this.name}`)
 }
}

const soya = new Soya()
console.log(soya)