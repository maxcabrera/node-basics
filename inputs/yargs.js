const yargs  = require('yargs')

const argv = yargs.argv
console.log('argv', argv)

const a = {
  _: [ 'list' ],
  tittle: 'Welcome to the jungle',
  '$0': 'inputs/yargs'
}
