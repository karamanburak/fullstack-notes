/* -------------------- QUESTION - 1 -------------------- */
//console.log(0.1 + 0.2);
//console.log(0.1 + 0.2 == 0.3);

// Answers:
//console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);
// This will output true, as it compares the absolute difference between the sum of 0.1 and 0.2 and 0.3 to a very small value defined by Number.EPSILON, which represents the difference between 1 and the smallest floating-point number greater than 1.

//In JavaScript, numbers are represented using the IEEE 754 floating-point format,
//The result of 0.1 + 0.2 in JavaScript is approximately 0.30000000000000004.

//https://0.30000000000000004.com/ bu siteden sebepleri irdelenebilinir.


/* -------------------- QUESTION - 2 -------------------- */
//console.log(1 < 2 < 3);
//console.log(3 > 2 > 1)

// Answers:
//  1 < 2 evaluates to true because 1 is less than 2.
// Then, true is implicitly coerced to 1, and 1 is less than 3.
// So, the expression evaluates to true.



/* -------------------- QUESTION - 3 -------------------- */
// Write program to find the sum of positive numbers. But if the user enters a negative numbers, the loop ends, if the negative number entered is not added to sum:

// Answers:
//promtt-sycn

// const prompt = require('prompt-sync')({sigint: true});

// let sum = 0;
// let number = parseInt(prompt('Enter a number: '));

// while (number > 0) {

//   sum += number;
//   console.log(`Current sum: ${sum}`);
//   number = parseInt(prompt('Enter a number: '));
// }

//  console.log(`The sum of positive numbers is ${sum}.`);

///Browser
// let sum = 0;
// let number = parseInt(prompt('Enter a number: '));

// while (number >= 0) {
//     sum += number;
//     number = parseInt(prompt('Enter a number: '));
// }

// console.log(`The sum of positive numbers is ${sum}.`);

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let sum = 0;
// const getPositiveNumber = () => {
//   rl.question("Enter a num: ", (number) => {
//     const num = parseInt(number);
//     if (num > 0) {
//       sum += num;
//       getPositiveNumber(); // recursive
//     } else {
//       console.log("Sum of positive nums:", sum);
//       //rl.close();
//     }
//   });
// };
// getPositiveNumber();



/* -------------------- QUESTION - 4 -------------------- */
// console.log(null == undefined);
// console.log(null === undefined);
// console.log(isNaN(2 + null));
// console.log(isNaN(2 + undefined))
// null ? console.log('true') : console.log('false')
// console.log(null ? true : false)

// Answers:
// 1.This is because null and undefined are of different types (null is an object and undefined is of type undefined).

// 2. 2 + null evaluates to 2 because null is treated as 0 in arithmetic operations.
// 3. 2 + undefined results in NaN (Not-a-Number) because undefined cannot be added to a number.
// 4. null evaluates to falsey in JavaScript.



/* -------------------- QUESTION - 5 -------------------- */
// var hash = '';
// var count = 1;
// var n = 3;
// for (var x = 1; x <= 7; x++) {
//   while (hash.length != count) hash += '#';
//   hash += '\n';
//   count += n;
//   console.log('value of count', count);
//   n++;
//   console.log('value of n', n);
//   console.log('value of hash', hash.length);
// }
// console.log(hash);

// var hash = "";
// for (var x = 1; x <= 7; x++) {
//     for (var i = 0; i < x; i++) {
//         hash += "#";
//     }
//     hash += "\n";
// }
// console.log(hash);

// Answers:
// The for loop iterates from 1 to 7.

//https://pythontutor.com/javascript.html#mode=edit  buradan visualize edilebilinir, stepleri gormek icin.

/* -------------------- QUESTION - 6 -------------------- */

// let firstName = null
// let lastName = null
// let nickName = "coderBond"
// console.log(firstName ?? lastName ?? nickName ?? "Anonymous")
// Answers:
//the nullish coalescing operator (??)



/* -------------------- QUESTION - 7 -------------------- */
// function onZoom(x){
//     console.log("Zoom active for", x)
// }
// function startClass(x,y,z){
//     console.log(" Class starts at", x);
//     y(z);
// }
// startClass("20:00",onZoom,"FS");

// Answers:
//Class starts at 20:00
//Zoom active for FS
//const date = new Date()

// class ZoomClass {
//   constructor(startTime) {
//     this.startTime = startTime;
//   }
//   onZoom(course) {
//     console.log("Zoom active for", course);
//   }

 
//   startClass(course) {
//     console.log("Class starts at", this.startTime);
//     this.onZoom(course);
//   }
// }
// const myClass = new ZoomClass("20:00");

// myClass.startClass("FS");



/* -------------------- QUESTION - 8 -------------------- */
// console.log(
//   (function f(n) {
//     return n > 1 ? n * f(n - 1) : n;
//   })(5)
// );
// Answer:120

//What is IIFE?
//IIFE is a powerful pattern to create private scopes and immediately execute code, ensuring data encapsulation and privacy.
//also known as an Immediately Invoked Function Expression or IIFE
// The name IIFE is promoted by Ben Alman

//example:
// (function() {
//   var counter = 0; // This variable is private to the IIFE

//   function increment() {
//       counter++;
//       console.log(counter);
//   }

//   increment(); // Output: 1
//   increment(); // Output: 2
// })();

// // Trying to access counter or increment outside the IIFE will result in an error
// console.log(counter); // Error: counter is not defined
// increment(); // Error: increment is not defined



/* -------------------- QUESTION - 9 -------------------- */

// (function () {

//   try {
//     throw new Error();
//   } catch (x) {
//     var x = 1,y = 2;
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();

// demonstrates how variable scope and hoisting work within a try...catch block:
// When an error is thrown, execution jumps to the catch block. In the catch block, a variable x is declared using var. However, since x is already declared as the parameter of the catch block, this declaration is hoisted to the top of the block. The variable y is also declared and initialized to 2.
// So, both x and y are accessible throughout the entire function because they are declared with var, which gives them function scope. The reason console.log(x); prints undefined is because the x variable declared inside the catch block is hoisted to the top of the function scope and initialized with undefined before the assignment var x = 1 takes effect. On the other hand, console.log(y); prints 2 because y is declared and assigned a value within the function scope.

/* -------------------- QUESTION - 10 -------------------- */

// let a = [10, 20, 30];
// a[10] = 100;

// console.log(a[7]);
// console.log(a)

// let b = [undefined];

// console.log(b[0]);
// console.log(b)

// b[2] = 1;
// console.log(b);
// console.log(b.map(e => 99));

// the map function will only apply the function to the defined elements.

/* -------------------- QUESTION - 11 -------------------- */

// function orderPizza(type, ingredients, callback) {
//     console.log('Pizza ordered...');
//     console.log('Pizza is for preparation');
//     setTimeout(function () {
//         let msg = `Your ${type} ${ingredients} Pizza is ready! The total bill is
// $10`;
//         callback(msg);
//     }, 3000);
// }
// orderPizza('Vegeterian', 'Cheese', function(message){
//   console.log(message);
// });

/* -------------------- QUESTION - 12 -------------------- */
// class Employee{
//     constructor(id,name){
// this.id=id;
//         this.name=name;
//     }
//     detail(){
//         console.log(this.id+" "+this.name)
// } }
// let e1=new Employee(10,"Qadir Adamson");
// let e2=new Employee("Victor Hug");
// let e3=new Employee(12)
// e1.detail();
// e2.detail();
// e3.detail();


// /* -------------------- QUESTION - 13 -------------------- */
// class Animal {
//     constructor(name, weight) {
//         this.name = name;
//         this.weight = weight;
//     }
//     eat() {
//         return `${this.name} is eating`;
// } sound(){
//         return `${this.name} is says`;
//     }
// }

// class Cat extends Animal {
//     constructor(name, weight) {
//         super(name, weight);
// } sound(){
//         return `${super.sound()}  Meow!`;
//     }
// }
// let felix=new Cat("felix",5)

// console.log(felix.sound())
