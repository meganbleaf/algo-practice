class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0
        let WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }
    //set accepts  a key and val, hashes the key
    //stores the key:value pair in the hash table array
    // via separate chaining
    set(key, value) {

        let index = this._hash(key)
        let newHashVal = [key, value]
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push(newHashVal)
    }

    //get accepts a key
    //hashes the key
    //retrieve the value at that key
    get(key) {
        let index = this._hash(key)
        let arrayAtIndex = this.keyMap[index]
        if (arrayAtIndex.length === 0 || !arrayAtIndex) {
            return undefined
        }
        for (let i = 0; i < arrayAtIndex.length; i++) {
            if (arrayAtIndex[i][0] === key) {
                return arrayAtIndex[i][1]
            }
        }
    }

    //loops through the hash table array and returns an array of keys in the table
    // [[1, hello], [[2, goodbyle],[3, yes]]
    keys() {
        let keysArr = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0]))
                        keysArr.push(this.keyMap[i][j][0])
                }
            }
        }
        return keysArr
    }

    // loops through the hash table and returns an array of values in the table
    values() {
        let valuesArr = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1]))
                        valuesArr.push(this.keyMap[i][j][1])
                }
            }
        }
        return valuesArr
    }
}

