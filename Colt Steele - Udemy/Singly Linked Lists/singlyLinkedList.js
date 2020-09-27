class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val) {
        const pushNode = new Node(val)
        if (!this.head) {
            this.head = pushNode
            this.tail = this.head
        } else {
            this.tail.next = pushNode
            this.tail = pushNode
        }
        this.length++
        return this
    }

    pop() {
        let current = this.head
        let newTail = current
        //no nodes, return undefined
        if (!this.head) {
            return undefined
        } else {
            while (current.next) {
                newTail = current
                current = current.next
            }
            this.tail = newTail
            this.tail.next = null
            this.length--
            if (this.length === 0) {
                this.head = null
                this.tail = null
            }
            return current
        }
        //loop till you reach the 2nd to last node
        //set the tail to be the 2nd to last node
        //decrement length of list
        //return value of node removed
    }
    shift() {
        //no nodes, return undefined
        let oldHead = this.head
        if (!this.head) {
            return undefined
        } else {
            this.head = oldHead.next
            this.length--
        }
        return oldHead
        //store current head
        //set head proprerty to be current head's next
        //decrement length by 1
        //return value of removed node
    }

    unshift(val) {
        //create new node
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        let count = 0
        let current = this.head
        if (index < 0 || index >= this.length) {
            return null
        } else {
            while (count !== index) {
                current = this.head.next
                count++
            }
        }
        return current
        //negative or greater than equal to the length of the list return null
        //loop through list until you reach the index
    }

    set(value, index) {
        let changeVal = get(index)
        if (!changeVal) return false
        changeVal.val = value
        return true
    }

    insert(value, index) {
        let newNode = new Node(value)
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.unshift(value)
        if (index === this.length) return !!this.push(value)
        let oneBefore = this.get(index - 1)
        let temp = oneBefore.next
        newNode.next = temp
        oneBefore.next = newNode
        this.length++
        return true
        //if the index is less than 0 or greater than length return false
        //if index is same as length, push new to end of list
        //if index is 0 unshift to start
        //otherwise, use get method, figure out node before index (index -1)
        //set next property on that node to be new node
        //set next property on new node to be the previous next
        //increment length
        //return true

    }
    remove(index) {
        if (index < 0 || index > this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        let oneBefore = this.get(index - 1)
        let removed = oneBefore.next //to be deleted
        oneBefore.next = temp.next
        this.length--
        return removed
    }
    reverse() {
        if (!this.head) return undefined
        if (this.length === 1) return this
        let prev = null
        let next = null
        let count = 0
        let current = this.head
        this.head = this.tail
        while (count < this.length - 1) {
            count++
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return this
    }

}

let list = new SinglyLinkedList