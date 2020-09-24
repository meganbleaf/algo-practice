// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let counter = [0]
    let arrayOfNodes = [root, 's']
    while (arrayOfNodes.length > 1) {
        if (arrayOfNodes[0] === 's') {
            arrayOfNodes.shift()
            counter.push(0)
            arrayOfNodes.push('s')
        } else {
            arrayOfNodes.push(...arrayOfNodes[0].children)
            arrayOfNodes.shift()
            counter[counter.length - 1] += 1
        }

    }
    return counter
}


module.exports = levelWidth;
