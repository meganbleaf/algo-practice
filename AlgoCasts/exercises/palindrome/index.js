// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     const reversed = str.split('').reverse().join('')
//     if (reversed !== str) {
//         return false
//     } else {
//         return true
//     }
// }


// function palindrome(str) {
//     for (let character of str) {
//         reversed = character + reversed
//     }
//     if (str === reversed) {
//         return true
//     } else {
//         return false
//     }
// }

function palindrome(str) {
    let endChars = str.length - 1
    for (let i = 0; i <= str.length / 2; i++) {
        if (str[i] === str[endChars - i]) {
            continue
        } else {
            return false
        }
    }
    return true
}

module.exports = palindrome;
