// * =======================================================
// *                   KARAR YAPILARI
// * =======================================================

// //************************ IF-ELSE ***********************

//! Dort İslem Hesap Makinası
//!----------------------------------------------------------

//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
console.log("-------------------------------------");
console.log("==IF-ELSE IF== 4 Islem Hesap Makinesi");
console.log("-------------------------------------");

//!propmt a girilen değerler string olarak algılanır. sayı olsun istiyorsak önüne ya Number yazmalıyız ya da + koymalıyız

const number1 = +prompt("1. Sayiyi giriniz!")
const operation = prompt("+,-,*,/ islemlerinden birini giriniz!")
const number2 = Number(prompt("2. Sayiyi giriniz!"))
let result

if (operation == "+")
    result = number1 + number2
else if (operation == "-")
    result = number1 - number2
else if (operation == "*") {
    result = number1 * number2
} else if (operation == "/") {

    if (number2 != 0) {
        result = number1 / number2
    } else {
        alert("Payda 0 olamaz!")
    }
} else {
    alert("yanlis islem girdiniz!")
}

//! 1. yazim

if (sonuc != 0) {
    console.log(result);
}

//! 2. yazim

if (sonuc) {
    console.log(result);
}

//! 3. yazim

sonuc && console.log(result);