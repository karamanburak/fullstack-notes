const number1 = parseFloat(prompt('Enter your first number!'))
const operator = prompt('Enter operator (+, -, *, /)')
const number2 = parseFloat(prompt('Enter your second number!'))


if (operator == '+') {
    result = number1 + number2
} else if (operator == '-') {
    result = number1 - number2
} else if (operator == '*') {
    result = number1 * number2
} else {
    result = number1 / number2
}

console.log(`${number1} ${operator} ${number2} = ${result}`);