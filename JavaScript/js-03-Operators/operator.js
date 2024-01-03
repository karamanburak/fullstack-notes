// console.log('Operators')


let a = 10
let b = 2

// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a * b)
// console.log(a ** b)
// console.log(5 ** 3)

//^ Modulus - Remainder operatörü
let c = 3

// console.log(a / c) // 3.33333
// console.log(a % c) // 1 Kalanı verir

// let d = +prompt('Bir sayı giriniz : ')

// if (isNaN(d)) {
//     console.log('Sayı Girmediniz')

// }  else if (d % 2 === 0){

//     console.log('Girilen sayı Çift')
// }else {
//     console.log('Girilen sayı Tek')

// }


// let sure = 225

// let saat = parseInt(sure / 60)

// console.log(saat)


// let dakika = sure % 60

// console.log(`${sure} dakika ${saat}saat ${dakika} dakikadır`)

//^ increment decrement


//& post increment / decrement
let d = 3

// console.log(d++)
// console.log({d})

// let f = 5
// console.log(f--)
// console.log({f})


//& pre increment / decrement

let e = 3

// console.log(++e)
// console.log({e})

// let g = 5
// console.log(--g)
// console.log({g})



//^ Assignmet operators

let h = 10;
let i = 2;

let j = i

// console.log(j)

// i = 3

// console.log(j) //j nin değeri i değişti diye değişmez


// console.log(h = h +i) //12
// console.log(h -= i) //8
// console.log(h *= i) //20
// console.log(h /= i) //5
// console.log(h %= i) //0


//^ Comprassion Operators 

// Karşılaştırma operatörleri bize Boolean sonuç döndürür.

let k = 2
let l = '2'
let m = 2

// console.log(k == l) //& true //tipe bakmaksızın değere bakar
// console.log(k === l)//& false //hem tipe hem değere bakar
// console.log(k === m) //true


// console.log(k != l) //false
// console.log(k !== l) //true
// console.log(k !== m) //false

let n = true
// console.log(!n)

let o;

// if (!o) {
//     console.log('if çalıştı')
// }else {
//     console.log('else çalıştı')
// }


let p = 100

let q = 100

// console.log(p > q) //false
// console.log(p >= q) //true

// console.log('A' > 'a') //false



// * =======================================================
// *         MANTIKSAL OPERATORLER (logical operators)
// * =======================================================

// && VE AND
// tüm şartlar sağlanmalı ki sonuç doğru çıksın
let a1 = true // Karakter sayısı 8 den büyük mü
let b1 = true // Küçük harf var mı?
let c1 = false // Büyük harf var mı?
let d1 = false // Karakter sayısı 16 den büyük mü


let y = a1 && b1 && c1

console.log(y)

// || yeya OR

let z = d1 || b1 && c1
console.log(z)

//? TRUE
console.log(Boolean(5));//true
console.log(Boolean(-5));//true
console.log(Boolean(-15.5));//true

//? 5 falsy
console.log(Boolean(0)); //false
console.log(Boolean(null));//false
console.log(Boolean(""));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false


const v1 = false || 0 || 12.6 || true || false || null

console.log(v1); // 12.6

const v2 = false || 0 || null || undefined || NaN

console.log(v2); // NaN

const v3 = 5 && true && true && 0 && ""

console.log(v3); // 0

const v4 = 5 && true && true && 10 && -5

console.log(v4);



//! olumsuzu

console.log(!v4); // false
console.log(!v2); // true


//! genel kültür


console.log(Number("0b101")); // b = binary 2 lik taban

console.log(Number("0o75")) // o = octal 8 lik taban = 61 (5*8**0 = 5*1 = 5 7*8**1 = 7*8 = 56 // 56+5 = 61)

console.log(Number("0x11")); // x = hexa 16 lik taban = 17