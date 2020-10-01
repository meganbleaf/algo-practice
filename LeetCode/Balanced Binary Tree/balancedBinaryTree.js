//approach: Breadth First Search on each side of the branches
//create a queue and push in a value "r" so we know what level we're on
//we count up the times we hit "r" and if Math.abs(left -right) is 1
//return true, else return false

// function balancedBinaryTree(root) {

//     if (!root) {
//         return undefined
//     }
//     let leftTree = root.left
//     let rightTree = root.right
//     if ((!leftTree && !node.right.right && !node.right.left) || (!rightTree && !node.left.right && !node.left.left)) {
//         return true
//     }
//     let leftLevels = 1
//     let rightLevels = 1
//     let queue = [leftTree]
//     while (queue.length) {
//         let current = queue.pop()
//         if (current.left || current.right) {
//             leftLevels++
//             if (current.left) {
//                 queue.push(current.left)
//             } if (current.right) {
//                 queue.push(current.right)
//             }
//         }
//     }

//     queue = [rightTree]

//     while (queue.length) {
//         let current = queue.pop()
//         if (current.left || current.right) {
//             rightLevels++
//             if (current.left) {
//                 queue.push(current.left)
//             } if (current.right) {
//                 queue.push(current.right)
//             }
//         }
//     }

//     let balancedNum = Math.abs(leftLevels - rightLevels)
//     if (balancedNum <= 1) {
//         return true
//     } else {
//         return false
//     }
// }


//Ended up doing DFS on each node to check all the relative right and left heights

function isBalanced(root) {
    let balanced = true

    function depth(node) {
        if (node === null) return 0

        let rightHeight = depth(node.right)
        let leftHeight = depth(node.left)

        if (Math.abs(rightHeight - leftHeight) > 1) {
            balanced = false
        }
        return 1 + Math.max(leftHeight, rightHeight)

    }

    depth(root)
    return balanced
}