const command = (process.argv[2]) ? process.argv[2] : false
console.log('process.argv',process.argv)

if (command) {
  switch (command){
    case 'add':
      console.log('Adding a note')
      break
    case 'list':
      console.log('List notes')
      break
    case 'remove':
      console.log('Removing a note')
      break
    default:
      console.log('Command not recognized')
  }
}