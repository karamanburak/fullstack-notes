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



// const sayi = +prompt("Lütfen asal sayi kontrolü icin bir sayi giriniz!")
// let flag = true

// for (let i = 2; i < sayi; i++) {
//     if (sayi % i == 0) {
//         flag = false
//     }
// }
// console.log(flag ? "Girdiginiz sayi asaldir👌" : "Girdiginiz sayi asal degildir!");

// //? Ornek: 0-100 Arasinda 7 adet rastgele tamsayi sayi ureten kodu
// //? for dongusu ile yaziniz..

// const rast = Math.random() * 100;
// const rast2 = Math.ceil(rast)
// console.log(rast, rast2);


// for (let i = 1; i <= 7; i++) {
//     const random = Math.round(Math.random() * 100)
//     console.log(random);
// }



//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore nereye yakınsa oraya yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.


//****************** */ WHİLE*************
//*ORNEK1: while için 1-100  arasında bir sayı giriniz. aksi durumlarda error msj ı verip, tekrar sayı isteyiniz

let number = +prompt("Please enter a valid number between 1-100 ")

while (number < 1 || number > 100) {

    console.error("Number is not valid!");
    number = +prompt("Please enter a valid number between 1-100 ")
}

console.log(`Congratulations number is :`, number);

//! while daki şart true oldugu sürece altındaki süslü işler, false oldugu anda süslünün dışına çıkılır







