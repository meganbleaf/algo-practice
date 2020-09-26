function sameFrequency(integer1, integer2) {
    let frequencyObj = {}
    let arrayOf1 = Array.from(String(integer1))
    for (let i = 0; i < arrayOf1.length; i++) {
        frequencyObj[Number(arrayOf1[i])] ? frequencyObj[Number(arrayOf1[i])]++ : frequencyObj[Number(arrayOf1[i])] = 1
    }
    console.log(frequencyObj)
    let arrayOf2 = Array.from(String(integer2))
    console.log('array of 2', arrayOf2)
    for (let i = 0; i < arrayOf2.length; i++) {
        let current = Number(arrayOf2[i])
        if (frequencyObj[current] === 0 || !frequencyObj[current]) {
            return false
        } else {
            frequencyObj[current] -= 1
        }

    }
    return true
}

console.log(sameFrequency(132, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(3489578, 5879385))
console.log(sameFrequency(22, 222))