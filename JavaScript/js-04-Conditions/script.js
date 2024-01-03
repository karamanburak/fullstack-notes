// * =======================================================
// *                   KARAR YAPILARI
// * =======================================================

// //************************ IF-ELSE ***********************

// //! Dort İslem Hesap Makinası
// //!----------------------------------------------------------

// //? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
// console.log("-------------------------------------");
// console.log("==IF-ELSE IF== 4 Islem Hesap Makinesi");
// console.log("-------------------------------------");

// //!propmt a girilen değerler string olarak algılanır. sayı olsun istiyorsak önüne ya Number yazmalıyız ya da + koymalıyız

// const number1 = +prompt("1. Sayiyi giriniz!")
// const operation = prompt("+,-,*,/ islemlerinden birini giriniz!")
// const number2 = Number(prompt("2. Sayiyi giriniz!"))
// let result

// if (operation == "+")
//     result = number1 + number2
// else if (operation == "-")
//     result = number1 - number2
// else if (operation == "*") {
//     result = number1 * number2
// } else if (operation == "/") {

//     if (number2 != 0) {
//         result = number1 / number2
//     } else {
//         alert("Payda 0 olamaz!")
//     }
// } else {
//     alert("yanlis islem girdiniz!")
// }

// //! 1. yazim

// if (sonuc != 0) {
//     console.log(result);
// }

// //! 2. yazim

// if (sonuc) {
//     console.log(result);
// }

// //! 3. yazim

// sonuc && console.log(result);

//! TERNARY

// const age = 22;
// const gender = "erkek"
// const health = false

// if (age >= 20 && gender == "erkek" && health == true) {
//     console.log("Askerlik yapabilir 😎");
// } else {
//     console.log("Askerlik yapamaz 😒");
// }

// //! 2. yol ternary
// age >= 20 && gender == "erkek" && health == true ? console.log("askerlik yapablilir 😎") : console.log("askerlik yapamaz 😒");

// //? örnek ternary

// const grade1 = prompt("Please enter your grade")

// grade1 >= 50 ? console.log("SUCCESS 🏆") : console.log("FAIL");

// const score1 = grade1 >= 50 ? "SUCCESS 🏆" : ""

// const score2 = grade1 >= 50 && "SUCCESS 🏆"
// console.log(score1);
// console.log(score2);

// //? Nested ternary yazmak aslinda anlasilabilirligi azaltiyor. Bu sebeple, sadece 2 durum var ise
// //? Ternary kullanmak daha mantiklidir, yoksa if tercih edilebilir.

// const speed = 10

// speed > 120 ? console.log("Speedy") : speed >= 90 ? console.log("Normal") : console.log("Low Speed");


// // //? ayni örneğin if-else ile yapilmasi
// if (speed > 120) {
//     console.log("Speedy")
// } else if (speed >= 90) {
//     console.log("Normal")
// } else {
//     console.log("Low Speed")
// }

//**************** */ TERNARY

//? ornek: maasınız asgari ücretten düşük ve eşitse maaşınıza %25 zam yapılsın, değilse maaşınıza %10 zam yapılsın.

// const asgariUcret = 17000
// const maas = +prompt("Lütfen maasinizi giriniz!")

// const zamliMaas = maas <= asgariUcret ? maas * 1.25 : maas * 1.10
// console.log(zamliMaas);

// const maas = 10000
// const borc = 95000

// const krediDurumu = maas * 10 - borc >= 5000 ? console.log("Kredi alabilirsiniz!") : console.log("Borcunuzdan dolayi kredi cekemezsiniz");

// const maas = +prompt("maasinizi giriniz")
// const borc = +prompt("borcunuzu giriniz")

// const krediDurumu = maas * 10 -borc >= 5000 ? console.log("Kredi alabilirsiniz") : console.log("kredi cekemezsiniz");



//? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.


// const number1 = parseInt(prompt("Enter your first number!"))
// const number2 = parseInt(prompt("Enter your second number!"))
// const number3 = parseInt(prompt("Enter your third number!"))


// const n1 = +prompt("number1")
// const n2 = +prompt("number2")
// const n3 = +prompt("number3")

//? kosullara logical operatorler yardimiyla birlestirilmesi

// if (n1 > n2 && n1 > n3) {
//     console.log("biggest:", n1);
// } else if (n2 > n1 && n2 > n3) {
//     console.log("biggest : ", n2);
// } else if (n3 > n1 && n3 > n1) {
//     console.log("biggest :", n3);
// } else console.log("PLease Try Again!");

//! 2. yöntem

// let biggest = n1

// if (n2 > biggest) {
//     biggest = n2
// }
// if (n3 > biggest) {
//     biggest = n3
// }

// console.log(biggest);


const not = +prompt("Notu girin:");

if (not < 0 || not > 100) {
    console.log(" 0-100 aralığında bir sayı girin.");
} else if (not >= 0 && not <= 25) {
    console.log("Not: FF");
} else if (not >= 26 && not <= 45) {
    console.log("Not: DD");
} else if (not >= 46 && not <= 65) {
    console.log("Not: CC");
} else if (not >= 66 && not <= 75) {
    console.log("Not: BB");
} else if (not >= 76 && not <= 90) {
    console.log("Not: BA");
} else if (not >= 91 && not <= 100) {
    console.log("Not: AA");
}

