// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// solution 1: approach -- loop through the string from the end to the front, add each character
// to a new string, return the new backwards string
function reverse(str) {
    let backwards = ''
    for (let i = str.length - 1; i >= 0; i--) {
        //note, important to do length -1 here since we are paying attention to indeces
        backwards += str[i]
    }
    return backwards
}

module.exports = reverse;


//solution 2: approach -- use array.reverse method. First turn the string into an array of characters,
//then reverse, then turn back into a string

// function reverse(str) {
//     let arrayOfChars = str.split('')
//     let backwardsArray = arrayOfChars.reverse()
//     let newString = backwardsArray.join('')
//     return newString
// }
// module.exports = reverse;

//from solution video: Use the reduce method
//function reverse(str){
//     return str.split('').reduce((reversed, character) =>  character + reversed, '')
// }
