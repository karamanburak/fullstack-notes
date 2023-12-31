    /* ---------------------------------- */
    /*        SIMPLE JS CALCULATOR        */
    /* ---------------------------------- */

const number1 = parseFloat(prompt('Enter your first number!'))
const operator = prompt('Enter an operator (+, -, *, /)')
const number2 = parseFloat(prompt('Enter your second number!'))


if (operator === '+' ) {
    result = number1 + number2
} else if (operator === '-') {
    result = number1 - number2
} else if (operator === '*') {
    result = number1 * number2
} else {
    result = number1 / number2
}

console.log(`${number1} ${operator} ${number2} = ${result}`);


//  Q3.  Interpret the flow diagram below for the case where income = 2000 and cost = 1200.

// const income = parseInt(prompt('Enter your income!'))
// const cost =  parseInt (prompt('Enter your cost!'))

// if (income >= cost) {
//     result = income - cost
// } else {
//     result = NaN
// }

// console.log(`${income} - ${cost} = ${result}`)

// Q4. Interpret the same flow diagram for Income = 2000, cost = 2500.

// const income = parseInt(prompt('Enter your income!'))
// const cost = parseInt (prompt('Enter your cost'))

// if (income <= cost ) {
//     result = income - cost
// } else {
//     result = NaN
// }

// console.log(`${cost} - ${income}  = ${result}`);