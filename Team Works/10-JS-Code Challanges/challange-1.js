/* ---------------------------------- */
//^            CHALLANGE - 1          */
/* ---------------------------------- */


//!  Calculate the Greatest Common Divisor (GCD)

// Objective : Write a JavaScript program that calculates and prints the Greatest Common Divisor (GCD) of two
// given numbers using only conditional statements (if, else if, else) and loops (for, while).


// Rules :
// - You can only use conditional statements (if, else if, else) and loops (for,
//     while, do while).
//     - The program should prompt the user for two numbers, a and b.
//     - Display the calculated GCD on the console.

// let a = +prompt("Please enter your first number!");
// let b = +prompt("Please enter your second number!");
// let gcd

// while (a != b) {
//     if (a > b) {
//         a = a - b
//     } else {
//         b = b - a
//     }
// }

// gcd = a

// console.log(`GCD is : ${gcd} `);


//^ WHILE VERSION

// const num1 = +prompt("Lütfen 1. sayiyi giriniz")
// const num2 = +prompt("Lütfen 2. sayiyi giriniz")
// let gcd

// for (let i = num1 < num2 ? num1 : num2; i <= num1 && i <= num2; i--) {
//     if (num1 % i === 0 && num2 % i === 0) {
//         gcd = i;
//         break
//     }
// }

// console.log(`The GCD of the entered numbers is : ${gcd}`);





/* ---------------------------------- */
//^          CHALLANGE  - 2           */
/* ---------------------------------- */

//! FIBONACCI NUMBER

// Write a JavaScript program that computes and prints the first n Fibonacci numbers without
// using any built-in functions (like Math.pow, Math.sqrt, Array methods, etc.) or arrays.
// Rules:

// - You must not use any built-in JavaScript functions related to Fibonacci sequences
// or arrays.
// - The program should prompt the user for the value of n.
// - Display the first n Fibonacci numbers.

// Example: For n = 7, the Fibonacci sequence would be: 0, 1, 1, 2, 3, 5, 8

// const num = parseInt(prompt("Lütfen bir sayi giriniz!"))

// if (num === 1) {
//     console.log('0');
// } else if (num === 2) {
//     console.log('0,1');
// } else {
//     let a = 0;
//     let b = 1;
//     let output = '0,1';
//     for (let i = 3; i <= num; i++) {
//         let c = a + b;
//         output += ',' + c;
//         a = b;
//         b = c;
//     }
//     console.log(`Ilk ${num} fibonacci serisi : ` + output);
// }



/* ---------------------------------- */
//^            CHALLANGE - 3          */
/* ---------------------------------- */

//! Armstrong Number Checker

// Objective : Write a JavaScript program to check if a given number is an Armstrong number using only
// conditional statements (if, else if, else) and loops (for, while).

// Rules :

// - An Armstrong number (also known as narcissistic number) of three digits is an
// integer such that the sum of the cubes of its digits is equal to the number itself.
// - You can only use conditional statements (if, else if, else) and loops (for,
// while, do while).
// - The program should prompt the user for a number.
// - Display whether the entered number is an Armstrong number or not.

// Example Armstrong numbers:
// . 153: 13+53+33 = 1 + 125 + 27 = 153
// . 370: 33+73+03 = 27 + 343 + 0 = 370
// . 371: 33+73+13 = 27 + 343 + 1 = 371
// . 407: 43+03+73 = 64 + 0 + 343 = 407
// . 1634: 14+64+34+44 = 1 + 1296 + 81 +256 = 1634
// . 8208
// . 9474
// . 54748


// const num = prompt("Lütfen bir sayi giriniz!")
// const n = num.length
// let sum = 0;
// for (let i = 0; i < n; i++) {
//     sum += num[i] ** n
// }
// if (sum === +num) {
//     console.log(`Girilen sayi bir Armstrong sayisidir!`);
// } else {
//     console.log(`Girilen sayi bir Armstrong sayisi degildir!`);

// }

let num = parseInt(prompt("Enter a number:"));
let originalNumber = num;
let digitCount = 0;
let sum = 0;

while (originalNumber !== 0) {
    originalNumber = Math.floor(originalNumber / 10)
    console.log(originalNumber)
    digitCount++
}

originalNumber = num;

while (originalNumber > 0) {
    let digit = originalNumber % 10;
    sum += digit ** digitCount;
    originalNumber = Math.floor(originalNumber / 10)
}

sum === num ? console.log(num + " is an Armstrong number.") : console.log(num + " is not an Armstrong number."
)