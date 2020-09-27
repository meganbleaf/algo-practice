class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }

}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
            this.length++
        }
        return this
    }

    pop() {
        if (!this.head) return undefined
        let removedTail = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = removedTail.prev
            this.tail.next = null
            removedTail.prev = null
        }
        this.length--
        return removedTail
    }

    //remove a node from beginning of list
    shift() {
        if (this.length === 0) return undefined
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            let removedHead = this.head
            this.head = removedHead.next
            this.head.prev = null
            removedHead.next = null
        }
        this.length--
        return removedHead
    }
    //add a node to beginning of list
    unshift(val) {
        let newHead = new Node(val)
        if (this.length === 0) {
            this.head = newHead
            this.tail = newHead
        } else {
            this.head.prev = newHead
            newHead.next = this.head
            this.head = newHead
        }
        this.length++
        return this
    }
    get(index) {
        let trackIdx
        let current = this.head
        if (index >= this.length || index < 0) return null
        if (index <= this.length / 2) {
            while (trackIdx !== index) {
                current = current.next
                trackIdx++
            }
            return current
        } else {
            trackIdx = this.length - 1
            current = this.tail
            while (trackIdx !== index) {
                current = current.prev
                trackIdx--
            }
            return current
        }

    }
    set(index, value) {
        let foundNode = get(index)
        if (foundNode) {
            foundNode.val = value
            return true
        } else {
            return false
        }
    }
    insert(index, value) {
        if (index < 0 || index >= this.length) return false
        if (index === 0) {
            this.unshift(value)
        } else if (index === this.length) {
            this.push(value)
        } else {
            let newNode = new Node(value)
            let oneBefore = get(index - 1)
            let oneAfter = oneBefore.next
            oneBefore.next = newNode
            newNode.prev = oneBefore
            newNode.next = oneAfter
            oneAfter.prev = newNode
        }
        this.length++
        return true
    }
    remove(index) {
        if (index < 0 || index >= this.length) return false
        if (index === 0) {
            this.length--
            return this.shift()
        } else if (index === this.length - 1) {
            this.length--
            return this.pop()
        } else {
            let toDelete = get(index)
            let oneBefore = toDelete.prev
            let oneAfter = toDelete.next

            oneBefore.next = oneAfter
            oneAfter.prev = oneBefore
            toDelete.next = null
            toDelete.prev = null
            this.length--
            return toDelete
        }


    }

}