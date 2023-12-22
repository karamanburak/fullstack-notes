// console.log('Hello World')

/*
String
Number
Boolean
Null
Undefined
BigInt
Symbol
*/


//^ String

/* const mesaj = 'Dünya'

let str1 = 'Merhaba" Dünya" "22 \'Aralık 2023'
let str2 = "Merhaba ' Dünya"
let str3 = `Merhaba ${mesaj}`
let str4 = new String('Merhaba Dünya')


console.log(str1)
console.log(str2)
console.log(str3)
console.log(typeof str3,str3)
console.log(typeof str4,str4) */

//^ Number
/* 
let num1 = 1
let num2 = 1.2
let num3 = - 0.123456789

console.log(typeof num1)
console.log(typeof num2)
console.log(typeof num3)

//2^53 = 9007199254740992

//^ BigInt

//* 2^53 -1 den büyük sayılar için kullanılır

const buyukSayi = 1234567890123456789012345678901234567890n

console.log(typeof buyukSayi)
console.log(10n+20n)
 */

//^ Boolean

//* true false

// console.log(3 > 2)
// console.log(3 < 2)
// console.log(typeof true)
// console.log(typeof false)

// //! Falsy değerler
// /*
// 0, '', "", null, undefined
// */
// const arr = [1,2]

// let abc;
// // abc = prompt('Bir değer girin')

// console.log(typeof abc)
// // abc = 0
// console.log(abc)
// console.log(Boolean(arr)) // true
// console.log(Boolean(0)) //false
// console.log(Boolean(null))
// console.log(Boolean(''))

// const def = 0
// def = 1 //! hata alırız
// console.log(def) 

//^ Null & Undefined & NaN

// console.log(typeof null)

// let n = null

// console.log(Boolean(n))

// console.log(null - 5)

// let u;

// console.log(Boolean(u))
// console.log(u - 5)


// console.log(null == undefined)

// let y = u -5

// console.log(typeof y)

// console.log(Number('asdf'))
// console.log(Number('1203'))

// let z = Number('1203')

// console.log(isNaN(y)) //* NaN tespiti yapar. NaN ise true, NaN değilse false verir.
// console.log(isNaN(z))

console.log(null === null) 
console.log(undefined === undefined) 
console.log(NaN === NaN) 

console.log(Boolean(NaN))

console.log(NaN == false)
console.log(NaN == true)


