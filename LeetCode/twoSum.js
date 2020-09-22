//Approach: double for loop, for each i, add j.
// If i + j = target, push index of i & index of j into an array & retun the array

const twoSum = (array, targetNum) => {
    arrayOfIndeces = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if (array[i] + array[j] === targetNum) {
                arrayOfIndeces.push(i)
                arrayOfIndeces.push(j)
                return arrayOfIndeces
            }
        }
    }

}

//the run time of this problem would be O(n^2) since the 
//nested for loop requires going through the array at the
//absolute maximum n * n times