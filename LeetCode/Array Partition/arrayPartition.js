function arrayPartition(k, numbersArray) {
    let possibleSub = []
    let solutionArray = []
    let idx = 0
    if (k > numbersArray.length) {
        return "No"
    }

    function subsequencesRecursive(numbersArray, k, possibleSub, idx) {

        if (possibleSub.length === k) {
            solutionArray.push(possibleSub)
            possibleSub = []
        }
        for (let i = idx; i < numbersArray.length; i++) {
            if (possibleSub.includes(numbersArray[i])) {
                possibleSub = []
                subsequencesRecursive(numbersArray, k, possibleSub, idx + 1)
            } else {
                possibleSub.push(numbersArray[i])
                subsequencesRecursive(numbersArray, k, possibleSub, idx + 1)
            }
        }
    }
    subsequencesRecursive(numbersArray, k, possibleSub, idx)

    if (solutionArray.length > 0) {
        return "Yes"
    } else {
        return "No"
    }
}

console.log(arrayPartition(2, [1, 2, 3, 4]))
console.log(arrayPartition(3, [1, 2, 2, 3]))
console.log(arrayPartition(10, [1, 4, 8, 2, 9, 20, 37, 55, 87, 76, 43, 28]))
console.log(arrayPartition(10, [1, 2, 2, 2, 8, 8, 8, 9, 10, 11]))