//approach: breadth first search on each side of the tree
//increment counter at each level
//return counter -1

// ^^ ended up just using the solution on leetcode -- DFS

function diameterOfBinaryTree(root) {
    let diameter = 0
    function depth(node) {
        if (!node) return 0
        let l = depth(node.left)
        let r = depth(node.right)
        diameter = Math.max(diameter, l + r)
        return Math.max(l, r) + 1
    }


    depth(root)
    return diameter

}


