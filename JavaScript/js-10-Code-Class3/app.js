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


//^ EXAMPLE -1 CEASERSHIFT
// Sezar sifrelemesi. String alacak ve ikinci parametre sayi olacak. O sayi kadar kaydirma yapacak.

// function cipher(str, shift) {
//     let result = ''


//     for (let i = 0; i < str.length; i++) {

//         let ciphedText = str.charCodeAt(i) + shift
//         result += String.fromCharCode(ciphedText)
//     }
//     console.log(result);

// }

// cipher('abc', 3);

//

//^ VERSION 2

function decipher(str, shift) {
    let result = ''


    for (let i = 0; i < str.length; i++) {

        let deciphedText = str.charCodeAt(i) - shift
        result += String.fromCharCode(deciphedText)
    }
    console.log(result);

}

decipher('Khoor#zruog', 3);


