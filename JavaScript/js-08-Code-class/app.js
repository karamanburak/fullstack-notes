
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

const toplamTutar = (urunFiyati, indirimOrani) => {
    return `Ürün fiyati ${urunFiyati} lira indirim orani ${indirimOrani} lira  ve toplam fiyat ${urunFiyati - (urunFiyati * indirimOrani) / 100} liradir.`
}

console.log(toplamTutar(100, 20));

//^ EXAMPLE - 8

//?  Celcius Fahrenheit derece çevrim fonksiyonu

const convert = (x, y) => {
    return y = x * (9 / 5) + 32

}
console.log(convert(30))


//?   Fahrenheit Celcius derece çevrim fonksiyonu

const fahrenheitToCelcius = (fahrenheit) => {
    return celcius = ((fahrenheit - 32) * 5) / 9
}
console.log(fahrenheitToCelcius(86));