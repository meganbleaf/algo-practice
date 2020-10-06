function twoStrings(array1, array2) {
    let arrayOfMaps = []
    let countObj = {}
    for (let i = 0; i < array1.length; i++) {
        let subArray = array1[i].split('')
        for (let j = 0; j < subArray.length; j++) {
            countObj[subArray[j]] ? countObj[subArray[j]] += 1 : countObj[subArray[j]] = 1
        }
        arrayOfMaps.push(countObj)
        countObj = {}
    }

    for (let i = 0; i < array2.length; i++) {
        let subArray2 = array2[i].split('')
        let found = false
        for (let j = 0; j < subArray2.length; j++) {
            if (arrayOfMaps[i][subArray2[j]]) {

                console.log("YES")
                found = true
                break
            }
        }
        if (!found) {
            console.log("NO")
        }
    }

    //for each index -- split the array into characters
    //add to map object
    //loop through array2[i] & check if there's at least 1 thing 
    //in the map 
    //if yes, then consolelog yes
}

twoStrings(['ab', 'cd', 'ef'], ['af', 'ee', 'ef'])