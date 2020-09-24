const lemonadeChange = (arrayOfBills) => {
    let change = 0
    let income = { 5: 0, 10: 0, 20: 0 }
    for (let i = 0; i < arrayOfBills.length; i++) {
        income[arrayOfBills[i]] += 1
        change = arrayOfBills[i] - 5

        if (change === 5) {
            if (income[5] > 0) {
                income[5] -= 1
            } else {
                return false
            }
        } if (change === 15) {
            if (income[5] >= 1 && income[10] >= 1) {
                income[5] -= 1
                income[10] -= 1
            } else if (income[5] >= 3) {
                income[5] -= 3
            } else {
                return false
            }
        }
    }
    return true
}

// const changeBack = (incomeArray, changeAmt) => {
//     if (changeAmt === 5) {
//         if (incomeArray.includes(5)) {
//             return true
//         } else {
//             return false
//         }
//     } else if (changeAmt === 15) {
//         let countObj = {}
//         for (let i = 0; i < incomeArray.length; i++) {
//             if (incomeArray[i] === 5) {
//                 if (countObj[5]) {
//                     countObj[5] += 1
//                 } else {
//                     countObj[5] = 1
//                 }
//             } else if (incomeArray[i] === 10) {
//                 if (countObj[10]) {
//                     countObj[10] += 1
//                 } else {
//                     countObj[10] = 1
//                 }
//             }
//         }
//         if (countObj[5] >= 3 || (countObj[5] >= 1 && countObj[10] >= 1)) {
//             return true
//         } else {
//             return false
//         }

//     } else if (changeAmt === 0) return true

// }

console.log(lemonadeChange([5, 5, 10, 10, 20]))

//sort the array from least to greatest
    //if you add n numbers and it's > change
    //return false
    //== change return true
    //< change -- keep going
    //if change 5, 15
    //if 5 -- look for 5 dollar bills
    //if 15 -- need 1 five and 1 ten or 3 fives 