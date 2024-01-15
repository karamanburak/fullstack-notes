
//^ EXAMPLE - 1
//! verilen sayinin carpim tablosunu yazdiran fonksiyon

// let num1 = +prompt("Lütfen bir sayi giriniz")
// let num2 = +prompt("Kacinci sayiya kadar carpim tablosu verilsin")
// const printMultiplicationTable = (num1, n) => {

//     for (let i = 1; i <= n; i++) {
//         sum = console.log(`${num1} * ${i} = ${num1 * i}`);

//     }
//     return sum
// }

// printMultiplicationTable(num1, num2);

//^ EXAMPLE - 2
// const myFunc = (num1, num2) => {
//     return num1 % num2 ? false : true
// }

// const isDivide = myFunc(252, num2)
// console.log(isDivide);


//^ EXAMPLE - 3
//! Tavla zari fonksiyonu her cagirildiginda 1-6 arasi rastgele sayi üretilecek
//sonuçları 2-3, 5-6, 3-4 gibi sergileyecek.
//her zaman sol tarafta küçük zar sergilenecek

// const zar = () => {

//     const zarAt = () => {
//         return Math.floor(Math.random() * 6) + 1;
//     }
//     let zar1 = zarAt()
//     let zar2 = zarAt()

//     if (zar1 === zar2) {
//         console.log(`Tebrikler ${zar1}-${zar2} cift geldi.`);
//     }
//     else {
//         // console.log(`${zar1 < zar2 ? zar1 : zar2} - ${zar1 < zar2 ? zar2 : zar1}`);
//         zar1 < zar2 ? console.log(zar1, zar2) : console.log(zar2, zar1)

//     }

// }
// zar();



//^ EXAMPLE - 4
// function random(min, max) {
//     return min + Math.floor(Math.random() * (max - min));
// }

// console.log(random(100, 500))


//^ Version - 2
// const minMax = (min, max) => {
//     for (let i = 0; i < 100; i++)
//         console.log(min + Math.floor(Math.random() * (max - min)) + 1);

// }

// minMax(100, 200)
//^ EXAMPLE - 5

//? Her cagirildiginda arka plan rengini rastgele degistirecek bir fonksiyon yaziniz

// document.body.style.backgroundColor = getRandomColor()

// const getRandomColor = () => {

//     const rgbGen = () => {
//         return Math.floor(Math.random() * 256);
//     }
//     let r = rgbGen()
//     let g = rgbGen()
//     let b = rgbGen()
//     return `rgb (${r}, ${g}, ${b})`;
// }

// console.log(document.body.style.backgroundColor = getRandomColor())



//^ EXAMPLE - 6
//? Çitlikteki hayvan sayılarını parametre olarak alacak ve ayak sayıları toplamını döndürecek bir fonksiyon yazınız.
//! Tavuk, İnek, Ördek, Keçi

// const ayakSayisi = (tavuk, inek, ördek, keci) => {
//     return (tavuk + ördek) * 2 + (inek + keci) * 4
// }

// console.log(ayakSayisi(5, 3, 2, 10));

//^ EXAMPLE - 7
//? Ürün fiyatı ve indirim oranı verilecek.
// 1- orjinal fiyat
// 2- İndirim oranı
// 3- İndirimli tutar

// const toplamTutar = (urunFiyati, indirimOrani) => {
//     return `Ürün fiyati ${urunFiyati} lira indirim orani ${indirimOrani} lira  ve toplam fiyat ${urunFiyati - (urunFiyati * indirimOrani) / 100} liradir.`
// }

// console.log(toplamTutar(100, 20));

//^ EXAMPLE - 8

//?  Celcius'u Fahrenheit'a ceviren derece fonksiyonu

// const cToF = (celcius) => {
//     return +(celcius * 9 / 5 + 32).toFixed(2)

// }

//?   Fahrenheit'i Celcius'a ceviren derece fonksiyonu

// const fToC = (fahrenheit) => {
//     return +((fahrenheit - 32) * 5 / 9).toFixed(2)
// }

// while (true) {
//     let secim = prompt(`Lütfen seciminizi yapin :
//     1 - Celcius to Fahrenheit
//     2 - Fahrenheit to Celcius
//     q - Cikis`)

//     if (secim == 1) {
//         console.log(cToF(+prompt('Cevirmek istediginiz degeri giriniz')));

//     } else if (secim == 2) {
//         console.log(fToC(+prompt('Cevirmek istediginiz degeri giriniz')));

//     } else if (secim == 'q') {
//         break
//     } else {
//         console.log(`Hatali giris yaptiniz`);

//     }
// }

// console.log('Cikis yapildi');


//^ VERSION - 2

// const fToC = (fahrenheit) => {
//     return ((fahrenheit - 32) * 5 / 9).toFixed(2);
// };

// const cToF = (celsius) => {
//     return (celsius * 9 / 5 + 32).toFixed(2);
// };

// while (true) {
//     let value = prompt("F (fahrenheit) | C (celsius) | Q (exit)").toUpperCase();
//     if (value == "Q") break;
//     else {
//         let input = parseInt(prompt("Deger girin:"));
//         if (value === "F") {
//             console.log(`${input} Fahrenheit, ${fToC(input)} Celsius`);
//         } else if (value === "C") {
//             console.log(`${input} Celsius, ${cToF(input)} Fahrenheit`);
//         } else {
//             console.log("invalid value");
//         }
//     }
// }

// console.log('Cikis yapildi');


//^ EXAMPLE - 9
//? Girilen yilin artik yil olup olmadigini hesaplayan fonksiyon yaziniz

// const artikYil = (year) => {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         console.log(year + " bir artık yıldır.");
//     } else {
//         console.log(year + " bir artık yıl değildir.");
//     }
//     return artikYil
// }

// artikYil(prompt('Bir yil girin'))


//^ EXAMPLE - 10
// Palindrome kondtrolü

function terCevir(str) {
    let ters = ""

    for (let i = str.length - 1; i >= 0; i--) {
        ters += str[i]
    }

    if (str.toLowerCase() === ters.toLocaleLowerCase()) {
        console.log(`${str} bir palindrome dur`);
    } else {
        console.log(`${str} bir palindrome degildir`);

    }
}

terCevir('Merhaba')
terCevir('Kayak')
terCevir('rotator')