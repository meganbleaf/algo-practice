//approach: iterate through the left side of the tree. 
//for each value, iterate through all right side of tree, incrementing
//value if node value is >= current node value
//iterate through 

function greaterSumTree(node) {
    if (node.right) {
        return node.value += greaterSumTree(node.right)

    }

}