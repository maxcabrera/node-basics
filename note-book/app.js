const yargs = require('yargs')
const notes = require('./notes')

const argv = yargs.argv
const command = process.argv[2]

if(command) {
  switch (command) {
    case 'add':
      notes.addNote(argv.title, argv.body)
      break
    default:
      console.log('command not defined')
  }
}