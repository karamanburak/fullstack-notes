// const massMark = 78
// const heightMark = 1.69
// const massJohn = 92
// const heightJohn = 1.95

// const BMIMark = massMark / heightMark ** 2
// const BMIJohn = massJohn / (heightJohn * heightJohn)
// // console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }


// const scoreDolphins = (96 + 108 + 89) / 3 
// const scoreKoalas = (88 + 91 + 110)  / 3
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins win the trophy 🏆`);
// } else if (scoreKoalas > scoreDolphins) {
//     console.log(`Koalas win the trophy 🏆`);
    
// } else if (scoreDolphins === scoreKoalas) {
//     console.log(`Both win the trophy!`);
// }

// BONUS 1
// const scoreDolphins = (97 + 112 + 80) / 3 
// const scoreKoalas = (109 + 95 + 50)  / 3
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log(`Dolphins win the trophy 🏆`);
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log(`Koalas win the trophy 🏆`);
    
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log(`Both win the trophy!`);
// } else {
//     console.log('No one wins the trophy 😒');
// }

// CHALLENGE #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

const bill = 275
const tip = bill <= 300 && bill >= 50 ? bill*0.15 : bill* 0.20
console.log(`The bill was ${bill}, and the tip was ${tip}, and the total value ${bill + tip}`);  