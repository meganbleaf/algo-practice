//Approach: loop through the array, for each value
//push that value + each of it's next values into the array until you get to
//array.length. 
//Filter the result array for duplicates


//alternate approach: start with the 
function subSets(numsArray) {
    possibleSubset = []
    result = []
    function possibleSubsets(numsArray, possibleSubset, result, idx = 0) {
        result.push(possibleSubset)
        for (idx; idx < numsArray.length; idx++) {
            possibleSubsets(numsArray, possibleSubset.concat(numsArray[idx]), result, idx + 1)
        }

    }
    possibleSubsets(numsArray, possibleSubset, result, idx = 0)
    return result
}

console.log(subSets([1, 2, 3]))