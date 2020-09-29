//break tree into 2 sides
//left side -- push values into an array
//right side -- push values into array
//loop through left side array and check that the right side is equal (0, 1)or 
//reversed of it
//create an array for each side of the tree
//if index is 0 or 1  the arrays should be equal at array[0], array[1]
//anything else should be equal to the reverse of the array

function isSymmetric(root) {
    if (!root) return true
    let leftTree = root.left
    let rightTree = root.right
    let rightArray = []
    let leftArray = []

    if (leftTree) {
        let q = [leftTree]
        let current
        while (q.length > 0) {
            current = q.shift()
            if (!current) {
                leftArray.push(null)
            } else {
                leftArray.push(current.val)
                q.push(current.left)
                q.push(current.right)

            }
        }
    }
    if (rightTree) {
        let q = [rightTree]

        let current
        while (q.length > 0) {
            current = q.shift()
            if (!current) {
                rightArray.push(null)
            } else {
                rightArray.push(current.val)
                q.push(current.right)
                q.push(current.left)

            }
        }
    }
    if (leftArray.length !== rightArray.length) {
        return false
    }
    for (let i = 0; i < leftArray.length; i++) {
        if (leftArray[i] === rightArray[i]) {
            continue
        } else {
            return false
        }
    }

    return true
}
