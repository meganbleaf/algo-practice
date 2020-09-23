const shortestToChar = (string, letter) => {
    let arrayOfIndeces = []
    stringArray = string.split('')
    //if string[i] is equal to letter - push the index up to the array of indeces
    for (let i = 0; i < stringArray.length; i++) {
        if (string[i] === letter) {
            arrayOfIndeces.push(i)
        }
    }
    //[3, 5, 6, 11]

    let arrayOfShortPaths = []


    for (let i = 0; i < stringArray.length; i++) {
        let shortestPath = Infinity
        arrayOfIndeces.forEach((char, index) => {

            let path = Math.abs(index - i)
            if (path < shortestPath) {
                shortestPath = path
            }
        })
        arrayOfShortPaths.push(shortestPath)
    }
    // stringArray.forEach((char, index) => {
    //     for (let i = 0; i < arrayOfIndeces.length; i++) {
    //         if ((arrayOfIndeces[i] - index) < shortestPath) {
    //             let path = Math.abs(index - arrayOfIndeces[i])
    //             if (path < shortestPath) {
    //                 shortestPath = path
    //             }
    //         }
    //         arrayOfShortPaths.push(shortestPath)
    //     }

    // })

    return arrayOfShortPaths
}

console.log(shortestToChar("loveleetcode", 'e'))




// let checkPath = index - arrayOfIndeces[0]
        // for (let i = 0; i < arrayOfIndeces.length; i++) {
        //     let checkPath = arrayOfIndeces[i] - index
        //     if (checkPath === 0) {
        //         arrayOfShortPaths.push(checkPath)
        //         continue
        //     }
        //     if (checkPath > 0) {
        //         arrayOfShortPaths.push(checkPath)
        //     }
        // }