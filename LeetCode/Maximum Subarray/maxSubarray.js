//approach: have a sum variable
//loop through the array and add together
//


///O(n) solution

// function maxSubarray(array) {
//     let maxSum = array[0]
//     let sum = 0
//     if (array.length > 1) {
//         for (let i = 0; i < array.length; i++) {
//             sum = array[i]
//             if (array[i] < 0) {
//                 continue
//             }
//             for (let j = i + 1; j < array.length; j++) {
//                 sum += array[j]
//                 if (sum > maxSum) {
//                     maxSum = sum
//                 }

//             }

//         }

//     }

//     return maxSum
// }

//O(n) time complexity solution
function maxSubarray(array) {
    let sum = array[0]
    let max = -Infinity
    for (let i = 0; i < array.length; i++) {
        sum = Math.max(sum + array[i], array[i])
        if (sum > max) {
            max = sum
        }
    }
    return max
}
console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
//subarrays

