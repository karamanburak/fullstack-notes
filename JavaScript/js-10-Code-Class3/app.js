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

//^ EXAMPLE - 7 // lastIndexOf()

let lrm = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`

console.log(lrm.lastIndexOf('e')); // 51
console.log(lrm.lastIndexOf('e', 50)); // 34

