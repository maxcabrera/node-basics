const changeObject = function(d) {
  d.prop1 = function() {}
  d.prop2 = "Hello"
}

const c = {}
c.prop1 = "bye"
console.log(c)
changeObject(c)
console.log(c)
