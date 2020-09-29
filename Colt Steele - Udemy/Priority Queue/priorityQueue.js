class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority //the lower the number the higher it needs to be in the array

    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        let newNode = newNode(val, priority)
        this.values.push(newNode)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.values.length - 1 //the last element in the array
        const element = this.values[index]
        while (index > 0) { //until we reach the front
            let parentIndex = Math.floor((index - 1) / 2) // count backwards to find the parent index
            let parent = this.values[parentIndex]
            if (element.priority >= parent.priority) break //if it's a higher number, parent has more priority, so break
            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex
        }

    }

    dequeue() {
        const min = this.values[0] //highest priority item at the top
        const end = this.values.pop() //the last item in array
        if (this.values.length > 0) {
            this.values[0] = end //swap first val with last val?
            this.sinkDown()
        }
        return min
    }
    sinkDown() {
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        while (true) {
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild, rightChildIdx
            let swap = null

            if (leftChildIdx < length) { //if the index is inside the array
                leftChild = this.values[leftChildIdx]
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if ((swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIdx
                }
            }

            if (swap === null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }

}