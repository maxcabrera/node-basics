const EventEmitter = require("events")

class Demo extends EventEmitter {
  constructor(){
    super()
    this.title = "ES classes in Node"
    this.number = 0
    this.on('count', this.count)
  }

  start() {
    const time = setInterval(() => {
      this.number++
      this.emit('count')
      if(this.number === 10) {
        clearInterval(time)
      }
    }, 200)
  }

  count() {
    console.log(this.number)
  }
}

module.exports = Demo