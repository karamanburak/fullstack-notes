/* ---------------------------------- */
/*             DATA TYPES             */
/* ---------------------------------- */

//Javascript otomatik olarak veri türünü algilar
sayi=45

//! bir degiskenin türününü görrebilmek icin typeof dan faydalanir.

// console.log(typeof sayi);


/* ---------------------------------- */
//!        PRIMITIVE DATA TYPES        */
/* ---------------------------------- */

// Tek bir deger tutabilen degiskenlerdir.
// Number, String,Null, Undefined, Boolean, BigInt

//! BigInt Data Type
// Cok büyük sayilar icin kullanilir
// Number veri türü ([-+2 üzeri 53 -1] degerine kadar tanimlidir.)
// 8.796.093.022.207n (sonuna konulan n degeri ile ifade edilir.)

//! Number Data Type
// ondalikli sayi negatif ya da pozitif sayi degerlerinin tanimlandigi degisken türüdür.

let x=34
let y=89.898956 //ondalikli sayilarda number olarak adlandirilir.
console.log(typeof x);
console.log(typeof y);

// Math metodu ile matematiksel islemler tanimlanabilir.

const pi=Math.PI
console.log(pi);

//Dairenin cevresini bulan kod
// Cevre formülü 2*pi*r
let r=6
let cevre= 2*Math.PI*r
console.log(cevre);

// Dairenin alanini bulan kod

//pi*r*r
let alan=pi*r*r
console.log(alan);