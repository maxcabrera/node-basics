/**
 Create function that returns the factorial
 on an positive integer or zero.
 **/

function fact(n) {
  if(n >=1) return n * fact(n-1)
  if(n === 0) return 1
}

console.log('Factorials:')
console.log(fact(1))
console.log(fact(3))
console.log(fact(5))

/**
 Create function that returns the fiboacci number
 base on the position given
 Fib: 1,1,2,3,5,8,13,21
 fib(3) => 2
 fib(4) => 3
 **/

function fib(n) {
  if(n >= 3) return fib(n-1) + fib(n-2)
  else return 1
}

console.log('Fibs:')
console.log('1', fib(1))
console.log('2', fib(2))
console.log('3', fib(3))
console.log('4', fib(4))


/***
 *
 */

function ways(n) {
  if(n < 2) return 1
  return ways(n-1) + ways(n-2)
}

console.log('Ways:')

console.log(ways(11))

function betterWays(n) {
  if(n < 2) return 1
  let nums = []
  nums[0] = 1
  nums[1] = 1
  for( let i = 2; i <= n; i++) {
    nums[i] = nums[i-1] + nums[i-2]
  }
  return nums[n]
}

console.log('Better ways')
console.log(betterWays(11))

