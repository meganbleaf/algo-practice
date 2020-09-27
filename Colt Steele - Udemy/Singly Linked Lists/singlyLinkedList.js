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
}

let list = new SinglyLinkedList