class Stack {
    constructor() {
        this.size = 0
        this.first = null
        this.last = null
    }
    push(value) {
        let newNode = new Node(value)
        if (this.size === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            let oldFirst = this.first
            this.first = newNode
            newNode.next = oldFirst

        }
        return ++this.size
    }

    pop() {
        if (!this.first) return null
        let toDelete = this.first
        if (this.first === this.last) {
            this.last = null
        } else {
            this.first = this.first.next
            this.size--
            return toDelete
        }
    }
}

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}