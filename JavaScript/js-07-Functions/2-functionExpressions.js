// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.
//* Örnek1:tek-çift kontrolü
//**********************************************************/
console.log("******** 2- EXPRESSION*******");

//^ EXAMPLE -1

// const isEvenOdd = function (sayi) {

//     return sayi % 2 == 0 ? "sayi cifttir" : "sayi tektir"

// }

// alert(isEvenOdd(6));
// alert(isEvenOdd(3));

//^ EXAMPLE -2 //? Verilen 3 sayidan en büyük sayiyi bulunuz

// const buyukBul = function (a, b, c) {
//     let enBuyuk;
//     if (a > b && a > c)
//         enBuyuk = a
//     else if (b > a && b > c)
//         enBuyuk = b
//     else
//         enBuyuk = c

//     return enBuyuk

// }
// alert(buyukBul(3, 5, 9))

//^ EXAMPLE - 3 //? arguments ile

const enBul = function () {

    console.log(arguments);

    let biggest = arguments[0]
    let smallest = arguments[0]

    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > biggest)
            biggest = arguments[i]

        {
            if (arguments[i] < smallest)
                smallest = arguments[i]
        }
    }
    return `En büyük sayi ${biggest} en kücük sayi ${smallest}`
}

// alert(enBul(90, 345, 123, 23, 545, 112, 5454, 76767, 22));

//^ EXAMPLE -4 //? Bir fonksiyonun icinden baska bir fonksiyon cagrilabilir.

const usAl = function (s1, s2) {

    return s1 ** s2
}
const cevreBul = function (s1, s2) {

    return (s1 + s2) * 2;
}
const alanBul = function (s1, s2) {

    return s1 * s2
}

const hesapla = function (secim, v1, v2) {
    let sonuc
    if (secim == "area") {
        sonuc = alanBul(v1, v2)
    } else if (secim == "perimeter") {
        sonuc = cevreBul(v1, v2)
    } else if (secim == "root") {
        sonuc = usAl(v1, v2)
    }

    return sonuc
}

console.log(hesapla("area", 3, 5));
console.log(hesapla("perimeter", 3, 5));
console.log(hesapla("root", 3, 5));

//^ EXAMPLE - 5
// -------------------------------------------------------------------------- 
//Bir ülkedeki ortalama yaşam ömrü 95 yıl olduğuna göre, 
// doğum yılı girilen kişinin yaşını hesaplattıran
// yaşına göre ortalama ... ömrünüz kaldı yazıp önerilerde bulunan program

// 0-10 : " Sen bu değerleri önemseme hayatın tadını çıkar"
// 10-20 : " Gezmek görmek istediğin yerler varsa yola çıkma zamanı.. "

/* -----------------------------------------------------------*/


const calculate = function (birthYear) {
    const ortOmur = 95
    const yas = new Date().getFullYear() - birthYear
    const kalanOmur = ortOmur - yas
    if (kalanOmur > 0 && kalanOmur <= 10)
        return ` ${kalanOmur} yilin var sen bu değerleri önemseme hayatın tadını çıkar`
    else if (kalanOmur > 10 && kalanOmur <= 20)
        return `${kalanOmur} yilin var gezmek görmek istediğin yerler varsa yola çıkma zamanı.. `
    else
        return `${kalanOmur} yilin var sen daha calis ilerde gezersin.`


}

console.log(calculate(+prompt("Please enter your birth year")));


