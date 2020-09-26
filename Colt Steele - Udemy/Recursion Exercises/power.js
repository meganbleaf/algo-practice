//write a function called power which accepts a base and an exponent. The function should return the
//power of the base to the exponent. This function shoud mimic the functionality of Math.pow
//don't worry about negative bases and exponents

function power(base, exponent) {
    if (exponent === 0) return 1

    return base * power(base, exponent - 1)

}

console.log(power(2, 4))
console.log(power(2, 2))
console.log(power(2, 0))