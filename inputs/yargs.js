/** Yargs returns an object with all the values passed
 * in the command line
 */
const yargs  = require('yargs')

const argv = yargs.argv
console.log('argv', argv)

