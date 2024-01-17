// let str = 'Hello World'
// let uzunluk = (str) => {
//     return str.length
// }
// for (let i = 0; i <= uzunluk(str) - 1; i++) {
//     console.log(str[i]);
// }


// let lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odio dolorum sunt quaerat illum tempora alias magnam excepturi numquam atque eaque officia soluta ullam eius nesciunt, sed quos, in culpa optio autem voluptates itaque eveniet quidem!`

// console.log(lorem.length);
// console.log(lorem[201]);
// console.log(lorem.charAt(201));

// if (lorem.charAt(201) === 'o') {
//     console.log(`yes`);
// } else {
//     console.log(`no`);
// }


// let lorem2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`

// console.log(lorem2.charCodeAt(0));
// console.log(lorem2.charCodeAt(19));


//^ EXAMPLE -1 CEASERSHIFT  // charCodeAt()
// Sezar sifrelemesi. String alacak ve ikinci parametre sayi olacak. O sayi kadar kaydirma yapacak.

// function cipher(str, shift) {
//     let result = ''


//     for (let i = 0; i < str.length; i++) {

//         let ciphedText = str.charCodeAt(i) + shift
//         result += String.fromCharCode(ciphedText)
//     }
//     console.log(result);

// }

// cipher('Hello World', 3);



//^ VERSION 2 // charCodeAt()

// function decipher(str, shift) {
//     let result = ''


//     for (let i = 0; i < str.length; i++) {

//         let deciphedText = str.charCodeAt(i) - shift
//         result += String.fromCharCode(deciphedText)
//     }
//     console.log(result);

// }

// decipher('Nkrru&]uxrj', 6);


//^ EXAMPLE - 3 // concat()
//! Orjinal degeri degistirmez, assigning ile kalici degistirilebilir.

// let lorem2 = `Lorem ipsum dolor sit amet elit.`
// let lorem3 = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`

// const lorem4 = lorem2.concat(' merhaba ' + lorem3)
// console.log(lorem4);

//^EXAMPLE - 4 // startsWith() & endsWith() & indexOf()



// console.log(lrm.startsWith('Lorem', 1)); // false
// console.log(lrm.startsWith('ipsum', 6)); // true
// console.log(lrm.indexOf('xyz')); // -1
// console.log(lrm.endsWith('sunt')); // true
// console.log(lrm.endsWith('Ipsum', 11)); // false

//^ EXAMPLE - 5 // indexOf()

// let lrm = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`

// function indexBul(str, char) {
//     let index = 0

//     if (str.indexOf(char, index) == -1) {
//         console.log(`Metin icerisinde ${char} bulunamadi!`);
//         return
//     }

//     while (str.indexOf(char, index) !== -1) {
//         console.log(str.indexOf(char, index));
//         index = str.indexOf(char, index) + 1

//     }

// }
// indexBul(lrm, 'e')


//^ EXAMPLE - 6 // includes()

// let lrm = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`

// console.log(lrm.includes('Ipsum')); // false
// console.log(lrm.includes('ipsum')); // true

// let email1 = 'mark.m@clarusway.com' //'Valid Email
// let email2 = 'mark.mclarusway.com'  //'Invalid Email

// if (email1.includes('@')) {
//     console.log('Valid Email');
// } else {
//     console.log('Invalid Email');
// }



//^ EXAMPLE - 7 // lastIndexOf()

// let lrm = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`

// console.log(lrm.lastIndexOf('e')); // 51
// console.log(lrm.lastIndexOf('e', 50)); // 34

//^ EXAMPLE - 8 // slice()

// let lrm = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`

// console.log(lrm.slice(6, 12)); // ipsum


// const str = "CLARUSWAY";

// console.log(str.slice(0, 4)); // CLAR
// console.log(str.slice(5, 8)); // SWA
// console.log(str.slice(2)); // ARUSWAY
// console.log(str.slice(3, -3)); // RUS
// console.log(str.slice(-8, -4)); // LARU

//^ EXAMPLE - 9 // tolocaleUpperCase()
//? Pangram

let TR = 'Pijamalı hasta yağız şoföre çabucak güvendi'
let US = 'The quick brown fox jumps over the lazy dog'
let DE = 'Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich. '


console.log(TR.toUpperCase())
console.log(TR.toLocaleUpperCase('tr-TR'))

console.log(DE.toUpperCase())
console.log(DE.toLocaleUpperCase('de-DE'))

// localeCompare()	    Compares two strings in the current locale.

// console.log('ß'.localeCompare('B'))


// console.log('ç'.charCodeAt(0))
// console.log('c'.charCodeAt(0))
