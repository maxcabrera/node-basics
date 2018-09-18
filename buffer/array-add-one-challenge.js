/**
 Create a function that
 adds 1 to the array, examples:
  [1,2,3] -> [1,2,4]
  [1,2,9] -> [1,3,0]
  [9,9,9] -> [1,0,0,0]
 **/

/***
 * def AddOne(arrayGiven):
 * carry = 1
 * result = new array
 * for i from (arrayGiven.length -1) down to 0:
 *    total = arrayGiven[i] + carry
 *    if total === 10 : carry = 1
 *    else carry = 0
 *    result[i] = total % 10
 * if carry === 1:
 *    result = new array[givenArray.length + 1]
 *    result[0] = 1
 * return result
 */

function addOne(arr) {
  let carry = 1
  let result = []
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(i)
    const total = arr[i] + carry
    if(total === 10) {
      carry = 1
    } else {
      carry = 0
    }
    result[i] = total % 10
  }
  if(carry === 1) {
    for(let i = 0; i < arr.length + 1; i++) {
      result[i] = 0
    }
    result[0] = 1
  }
  console.log('result',result)
  return result
}


const assert = require('assert')

assert.deepStrictEqual(addOne([1,2,3]), [1,2,4])
assert.deepStrictEqual(addOne([1,2,9]), [1,3,0])
assert.deepStrictEqual(addOne([9,9,9]), [1,0,0,0])



