const demoCtr = require('./es6-classes')
const demo = new demoCtr()
demo.start()

const Rectangle = class {
  constructor() {
    this.type = "rectangle"
  }

  yup() {
    console.log('*')
    console.log('**')
    console.log('***')
    console.log('****')
  }
}

console.log(Rectangle.name)
const rect = new Rectangle()
rect.yup()


const Circle = class Rendonde {
  constructor() {
    this.type = "circle"
  }
}

console.log(Circle.name)