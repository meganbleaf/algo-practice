//each number has 3 possible combos (except 7 & 9 which have 4)
//
function letterCombinations(digits) {
    let arrayOfCombos = []

    let possibleLetters = [
        "0",
        "1",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz"

    ]

    //take 1 number -- go through 1 letter in the number
    //match up combos of 2nd number

    //for every number, take every representation of that number and pass to recursive calls
    if (!digits) {
        return arrayOfCombos
    }
    let current = ''
    let idx = 0

    function letterCombinationsRecursive(arrayOfCombos, digits, current, idx, possibleLetters) {

        if (idx === digits.length) {
            //result.add(current?????) is current "string???"
            arrayOfCombos.push(current)
            return
        }
        let letters = possibleLetters[Number(digits[idx])]
        for (let i = 0; i < letters.length; i++) {
            letterCombinationsRecursive(arrayOfCombos, digits, current + letters[i], idx + 1, possibleLetters)
        }
    }



    letterCombinationsRecursive(arrayOfCombos, digits, current, idx, possibleLetters)
    return arrayOfCombos
}

console.log(letterCombinations("7888"))