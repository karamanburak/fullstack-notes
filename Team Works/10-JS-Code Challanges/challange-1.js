// Calculate the Greatest Common Divisor (GCD)
// Objective : Write a JavaScript program that calculates and prints the Greatest Common Divisor (GCD) of two
// given numbers using only conditional statements (if, else if, else) and loops (for, while).


// Rules :
// - You can only use conditional statements (if, else if, else) and loops (for,
//     while, do while).
//     - The program should prompt the user for two numbers, a and b.
//     - Display the calculated GCD on the console.

let a = +prompt("Please enter your first number!");
let b = +prompt("Please enter your second number!");
let gcd

while (a != b) {
    if (a > b) {
        a = a - b
    } else {
        b = b - a
    }
}

gcd = a

console.log(`GCD is : ${gcd} `);


