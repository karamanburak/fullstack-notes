// * =======================================================
// *                     LOOPS
// * =======================================================

//************************ FOR ****************************


//^ EXAMPLE - 1


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


//^ EXAMPLE - 2

//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.



// const sayi = +prompt("Lütfen asal sayi kontrolü icin bir sayi giriniz!")
// let flag = true

// for (let i = 2; i < sayi; i++) {
//     if (sayi % i == 0) {
//         flag = false
//     }
// }
// console.log(flag ? "Girdiginiz sayi asaldir👌" : "Girdiginiz sayi asal degildir!");

//^ EXAMPLE - 3

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

// let number = +prompt("Please enter a valid number between 1-100 ")

// while (number < 1 || number > 100) {

//     console.error("Number is not valid!");
//     number = +prompt("Please enter a valid number between 1-100 ")
// }

// console.log(`Congratulations number is :`, number);

//! while daki şart true oldugu sürece altındaki süslü işler, false oldugu anda süslünün dışına çıkılır


//^ EXAMPLE - 4

//****************** */ DO-WHİLE*************
//*ORNEK1: do-while için 1-100  arasında bir sayı giriniz. aksi durumlarda alert verip, tekrar sayı isteyiniz

// let number1

// do {

//     number1 = +prompt("Enter your a valid number betweeen 1-100 for 'do-while loop'")
//     number1 < 1 || number1 > 100 && alert(number1)
//     // alert(number1)

// } while (number1 < 1 || number1 > 100);

// console.log(number1);


//^ EXAMPLE - 5

//! şarta bakmadan ilk etapta do nun içindeki istek yapılır, sonrasında while içi true old sürece do içindeki istek yapılmaya devam edilir

//? ORNEK: Kullanicidan  Vize ve Final notlarini isteyen ve
//? vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi
//? yaziniz. Program her hesaplamadan sonra tekrar başkası için hesaplama yapilmak
//? istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not
//? isteyecek ve islemleri tekrar edecektir.


// let devam;
// do {

    // let vize = +prompt("Vize notunuzu giriniz!")
    // let final = +prompt("Final notunuzu giriniz!")

//     let ortalama = vize * 0.4 + final * 0.6
//     console.log(ortalama >= 60 ? "Tebrikler gectiniz" : "Kaldiniz");

//     devam = prompt("Devam etmek icin e/E giriniz!")

// } while (devam.toUpperCase() == "E");

// console.log("Islem kapandi");


//^ EXAMPLE - 6
//? ORNEK2: klavyeden q karakteri girilene kadar sayı girişi isteyen bir programı döngü kullanarak yazınız.

// let number1;
// do {
//     number1 = prompt("Please enter a valid number!")
// } while (number1 != "q");

// console.log("Done");

//^ EXAMPLE - 7

// let devam;
// do {
    
// let vize = +prompt("vize notunuzu giriniz");
// let final = +prompt("final notunuzu giriniz");

// let ortalama=vize*0.4+final*0.6
// console.log(ortalama >=60 ? "tebrikler geçtiniz":"kaldınız");

// devam=prompt("devam etmek istiyorsanız e/E giriniz")

// } while (devam.toUpperCase()=="E");

// console.log("çıktık");










