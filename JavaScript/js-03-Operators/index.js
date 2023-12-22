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

//^ Symbol
// Objelerin properti isimleri kullanilabilir.
// uniq yani benzersiz degerlerdir.
const sym1 = Symbol('Hello')
const sym2 = Symbol('Hello')

console.log(sym1, sym2)

console.log(sym1 == sym2)

//^ type conversions

let a= 10
let b= '5'

console.log('Toplama', a + b)        //105
console.log('Cikarma', a - b)       // 5
console.log('Carpma', a * b)       // 50
console.log('Bölme', a / b)       // 2

console.log(a+ Number(b))        // 15
console.log(typeof b)


let c = Number(b)
let d = b
console.log(typeof c)
console.log(typeof d)
console.log(b,c,d)

console.log(b**'2')
console.clear()

let e = '123.45'


console.log(parseInt (e))          // Noktasiz kismi alir
console.log(parseFloat (e))       // Noktali kismi da alir
console.log(Math.trunc(123.45))  // Noktasiz kismi alir


//* .toString() Metodu numberlari stringe cevirir.
let f = 123.456
let g = '123.456'

console.log(f.toString())

let i = + g // + operatörü stringi number a cevirir.
console.log(typeof i)
console.clear()

//* .toFixed() noktadan sonra kac basamak alacagimizi belirtir.

//* Sayiyi stringe cevirir.
let j = 0.123456789
console.log(j)
console.log(j.toFixed(4))       // sonuc string 
console.log(+j.toFixed(4))     // sonuc number + operatöründen dolayi

console.log(typeof j, j)

//* 0.1 + 0.2
// https://0.30000000000000004.com/
console.log(0.1 + 0.2)
