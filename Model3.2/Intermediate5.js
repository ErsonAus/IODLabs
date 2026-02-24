let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?
console.log(2)
function currencyAddition(a, b) {
    const wholeNumber1 = a * 100
    const wholeNumber2 = b * 100
    const sum = wholeNumber1 + wholeNumber2
    return sum / 100
}
function currencyOperation(a, b, operation) {
    const wholeNumber1 = a * 100
    const wholeNumber2 = b * 100
    switch (operation) {
  case "+":
    const sum = wholeNumber1 + wholeNumber2
    return sum / 100
  case "-":
    const difference = wholeNumber1 - wholeNumber2
    return difference / 100
  case "*":
    const product = wholeNumber1 * wholeNumber2
    return product / 10000
  case "/":
    const quotient = wholeNumber1 / wholeNumber2
    return quotient / 100
  default:
    const def = wholeNumber1 + wholeNumber2
    return def / 100
}
}

console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(currencyOperation(0.1, 0.2, '+')) // true
console.log(currencyOperation(0.1, 0.2, '/')) // true
console.log(currencyOperation(0.1, 0.2, '*')) // true
console.log(currencyOperation(0.1, 0.2, '-')) // true