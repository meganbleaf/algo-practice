//root
// keep track of the path you've been on to the leaf node
//once you get to a leaf node (left & right are null)
//traverse back up and check if there's any other leafs
//boolean that is true 
//while true
//false when there's no more leafs to visit



function sumNumbers(root) {
    if (!root) return false
    let stringNum = ''
    let totalSum = 0

    function depth(node) {
        stringNum += node.val.toString()
        if (node.right) {
            depth(node.right)
        } if (node.left) {
            depth(node.left)
        } if (!node.right && !node.left) {
            totalSum += Number(stringNum)
        }
        stringNum = stringNum.slice(0, stringNum.length - 1)
    }

    depth(root)

    return totalSum
}
