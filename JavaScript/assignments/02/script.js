// let distance = prompt("Enter a valid distance!")
// console.log(`Distance : ${distance} km`);

// if (distance > 0 && distance < 500) {
//     result = distance * 50
// } else if (distance >= 500 && distance <= 1000) {
//     result = distance * 100
// } else if (distance > 1000) {
//     result = distance * 500
// } else {
//     console.log("Please enter a valid value!");
// }

// console.log(`Fee is : ${result} Ruble`);



let sum = 0;
let number = 0;
do {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
} while (number >= 0)
console.log(`The sum is ${sum}.`);