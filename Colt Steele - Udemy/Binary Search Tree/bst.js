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
    insert(value) {
        let newNode = new Node(value)
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
    //breadth first search
    //create a queue & a variable to store the values of nodes visited
    //place the root node in the queue
    //loop as long as there is anything in the queue
    //dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    //if there is a left property on the node dequeued, add it to the queue
    //if there is a right property on teh node dequeued - add it to the queue
    //return the variable that stores the values
    BFS() {
        let q = [this.root]
        let visited = []
        let val = this.root
        while (q.length > 0) {
            val = q.shift()
            visited.push(val)
            if (val.left) {
                q.push(val.left)
            }
            if (val.right) {
                q.push(val.right)
            }
        }
        return visited
    }

    //depth first search Pre-order
    //create a variable to sotre the values of the nodes visited
    //store the root of the BST in a variable called current
    //write a helper function that accepts a node
    //push the value of the node to the variable that stores the values
    //if the node has a left property, call the helper function with the left property on the node
    //if the node has a right property, call the helper function with the right prperty on the node
    //invoke the helper function with the current variable
    //return the array of values 

    DFSPreOrder() {
        let visited = []
        let current = this.root
        function traverse(node) {
            visited.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(current)
        return visited
    }

    DFSPostOrder() {
        let visited = []
        let current = this.root
        function traverse(node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            visited.push(node.value)
        }
        traverse(current)
        return visited
    }

    DFSInOrder() {
        let visited = []
        let current = this.root
        function traverse(node) {
            if (node.left) traverse(node.left)
            visited.push(node.value)
            if (node.right) traverse(node.right)
        }
        traverse(current)
        return visited
    }

}

var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log("pre", tree.DFSPreOrder())
console.log("post", tree.DFSPostOrder())
console.log("in", tree.DFSInOrder())