function validAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false
    }
    let countString1 = {}
    for (let char in string1) {
        countString1[char] ? countString1[char]++ : countString1[char] = 1
    }

    for (let i = 0; i < string2.length; i++) {
        let letter = string2[i]
        if (!countString1[letter]) {
            return false
        } else {
            countString1[letter] -= 1
        }
    }
    return true
}

console.log(validAnagram('aaz', 'zza'))