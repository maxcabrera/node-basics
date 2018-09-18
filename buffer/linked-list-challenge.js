class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.list = []
  }

  addNode(node) {
    if(this.list.length > 0) {
      this.list[this.list.length - 1].next = node
    }
    this.list.push(node)
  }

  countNodes(head) {
    let count = 1
    let current = head
    while(current.next) {
      count++
      current = current.next
    }
    return count
  }

  getHead() {
    return this.list[0]
  }
}

const list = new LinkedList()
const head = new Node(6)
list.addNode(head)
list.addNode(new Node(3))
list.addNode(new Node(4))
list.addNode(new Node(2))
list.addNode(new Node(1))
console.log('# of nodes:', list.countNodes(head))
//console.log('Head', list.getHead())



//console.log(list)