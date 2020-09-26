function countUniqueValues(sortedArray) {
    if (sortedArray.length === 0) {
        return 0
    }
    let pointer1 = 0
    let pointer2 = pointer1 + 1
    while (pointer2 <= sortedArray.length - 1) {
        if (sortedArray[pointer1] !== sortedArray[pointer2]) {
            pointer1++
            sortedArray.splice(pointer1, 1, sortedArray[pointer2])
            pointer2++
        } else {
            pointer2++
        }
    }

    return pointer1 + 1
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2, -1, -1, 0, 1]))