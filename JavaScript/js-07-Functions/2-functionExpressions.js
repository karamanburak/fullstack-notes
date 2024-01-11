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

alert(enBul(90, 345, 123, 23, 545, 112, 5454, 76767, 22));
