// * =======================================================
// *                     LOOPS
// * =======================================================

//************************ FOR ****************************


// //? ornek ekrana 10 kere merhaba yazdırın

// for (let index = 1; index <= 10; index++) {
//     console.log(index, "MERHABA");
//   }

//? 1 den N e kadar olan sayilarin toplami

// const N = +prompt("Lütfen N degerini giriniz")

// let toplam = 0

// for (let i = 1; i <= N; i++) {

//     toplam += i
// }
// console.log(toplam);


//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.



const sayi = +prompt("Lütfen asal sayi kontrolü icin bir sayi giriniz!")
let flag = true

for (let i = 2; i < sayi; i++) {
    if (sayi % i == 0) {
        flag = false
    }
}
console.log(flag ? "Girdiginiz sayi asaldir👌" : "Girdiginiz sayi asal degildir!");

