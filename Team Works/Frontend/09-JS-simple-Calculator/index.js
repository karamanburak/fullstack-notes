/* ---------------------------------- */
/*        SIMPLE JS CALCULATOR        */
/* ---------------------------------- */

// const number1 = parseFloat(prompt('Enter your first number!'))
// const operator = prompt('Enter an operator (+, -, *, /)')
// const number2 = parseFloat(prompt('Enter your second number!'))


// if (operator === '+' ) {
//     result = number1 + number2
// } else if (operator === '-') {
//     result = number1 - number2
// } else if (operator === '*') {
//     result = number1 * number2
// } else {
//     result = number1 / number2
// }

// console.log(`${number1} ${operator} ${number2} = ${result}`);


/* -------------------------------------------------------------------------- */
/*                                Switch Method                               */
/* -------------------------------------------------------------------------- */


// const number1 = parseFloat(prompt('Enter your first number!'))
// const operator =  prompt('Enter an operator between (+ | - | * | / |) ')
// const number2 = parseFloat(prompt('Enter your second number!'))

// switch (operator){
//     case '+':
//         result = number1 + number2
//         break
//     case '-':
//         result = number1 - number2
//         break
//     case '*' :
//         result = number1 * number2
//         break
//     case '/':
//         result = number1 / number2
//         break
//     default:
//         result = 'Invalid result'

// }

// console.log(`Result is : ${number1} ${operator} ${number2} = ${result}`);
// console.log(alert(`Result is : ${result}` ));



const firstNumber = prompt('Enter first Number');
const operator = prompt('Enter operator (+,-,*,/)');
const secondNumber = prompt('Enter Second Number');

let result = 0


if (operator == '+' | operator == '-' | operator == '*' | operator == '/') {
    switch (operator) {
        case "+":
            result = +firstNumber + +secondNumber;
            break
        case "/":
            result = +firstNumber / +secondNumber;
            break
        case "-":
            result = +firstNumber - +secondNumber;
            break
        case "*":
            result = +firstNumber * +secondNumber;
            break
        default:
            result = 'Try again';
    }

    console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`)

} else {
    console.log('Please Try Again')
}


