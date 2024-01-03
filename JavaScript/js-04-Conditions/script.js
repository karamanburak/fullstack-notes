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

const speed = 10

speed > 120 ? console.log("Speedy") : speed >= 90 ? console.log("Normal") : console.log("Low Speed");


// //? ayni örneğin if-else ile yapilmasi
if (speed > 120) {
    console.log("Speedy")
} else if (speed >= 90) {
    console.log("Normal")
} else {
    console.log("Low Speed")
}