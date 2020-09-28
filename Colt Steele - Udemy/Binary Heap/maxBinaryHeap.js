class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    //insert to the end only
    //bubble up to correct spot-- compare to parent & 
    //swap if it's larger than parent
    //fills out left first before right

    //push value into the values property
    //bubble up the value to it's correct spot

    insert(val) {
        this.values.push(val)
        this.bubbleUp()
    }
    bubbleUp() {
        let index = this.values.length - 1
        const element = this.values[index]
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            let parent = this.values[parentIndex]
            if (element <= parent) break
            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex
        }

    }
    //swap the first value in the values property with the last one
    //pop from values property to return value at the end
    //parent index starts at 0
    //find index of left child
    //find index of right child
    //if left or right child is great than element, swap
    //if both left & right are larger, swap with largest child
    //child index now becomes parent index
    //swap until neither child is larger than the element

    extractMax() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }
        return max
    }

    sinkDown() {
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        while (true) {
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild, rightChild
            let swap = null

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if (leftChild > element) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if ((swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)) {
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


