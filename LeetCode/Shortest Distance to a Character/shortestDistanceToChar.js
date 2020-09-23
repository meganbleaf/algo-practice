const shortestToChar = (string, letter) => {
    let arrayOfIndeces = []
    stringArray = string.split('')
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === letter) {
            arrayOfIndeces.push(i)
        }
    }

    let arrayOfShortPaths = []


    for (let i = 0; i < stringArray.length; i++) {
        let shortestPath = Infinity
        arrayOfIndeces.forEach((index) => {

            let path = Math.abs(index - i)
            if (path < shortestPath) {
                shortestPath = path
            }
        })
        arrayOfShortPaths.push(shortestPath)
    }

    return arrayOfShortPaths
}

console.log(shortestToChar("loveleetcode", 'e'))




