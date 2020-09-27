//write a function called binarySearch which accepts a sorted array and a value and returns
//the index at which the value exists. Otherwise return -1
[1, 2, 3, 4, 5, 6, 7, 8], 2
//0, 7   //4
//0, 2  //1
function binarySearch(array, value) {
    let left = 0
    let right = array.length - 1
    let middle = Math.floor((left + right) / 2)
    while (array[middle] !== value && left < right) {
        if (value > array[middle]) {
            left = middle + 1
        } else if (value < array[middle]) {
            right = middle - 1
        }
        middle = Math.floor((left + right) / 2)
    }
    if (array[middle] === value) {
        return middle
    } else {
        return -1
    }
}

console.log(binarySearch([1, 2, 3, 4, 5], 2))
console.log(binarySearch([1, 2, 3, 4, 5], 3))
console.log(binarySearch([1, 2, 3, 4, 5], 5))
console.log(binarySearch([1, 2, 3, 4, 5], 6))