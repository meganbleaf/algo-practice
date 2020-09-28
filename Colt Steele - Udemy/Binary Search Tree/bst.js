class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this
        } else {
            let current = this.root
            while (true) {
                if (value === current.value) return undefined
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }

    }

    find(val) {
        let current = this.root
        let found = true
        if (!this.root) return false
        while (current & !found) {
            if (val > current.value) {
                current = current.right
            } else if (val < current.value) {
                current = current.left
            } else {
                return true
            }
        }
        return false
    }

}

