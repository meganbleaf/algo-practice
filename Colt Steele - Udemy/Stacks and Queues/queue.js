class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            let currentLast = this.last
            this.last = newNode
            newNode.next = currentLast

        }
        return this.size++
        //add to end
    }
    dequeue() {
        //remove from beginning
        if (!this.first) return null
        if (this.first === this.last) {
            this.last = null
        }
        let toDelete = this.first
        this.first = toDelete.next
        this.size--
        return toDelete.value
    }
}
