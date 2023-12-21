/* ---------------------------------- */
/*             DATA TYPES             */
/* ---------------------------------- */

//Javascript otomatik olarak veri türünü algilar
sayi=45

//! bir degiskenin türününü görrebilmek icin typeof dan faydalanir.

// console.log(typeof sayi)


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
console.log(typeof x)
console.log(typeof y)

// Math metodu ile matematiksel islemler tanimlanabilir.

const pi=Math.PI
console.log(pi)

//Dairenin cevresini bulan kod
// Cevre formülü 2*pi*r
let r=6
let cevre= 2*Math.PI*r
console.log("cevre:", cevre)

// Dairenin alanini bulan kod

//pi*r*r
let alan=pi*r*r
console.log("alan:" ,alan)

// Sayi Yuvarlama Islemleri
//round
//ceil
//floor

// sayiyi yuvarlar
let alan1=Math.round(alan)
console.log(alan1)
console.log(Math.round(cevre))

//ceil bir üst tamsayiya yuvarlar
let sayi1=45.2345
console.log(Math.ceil(sayi1))
console.log(Math.round(sayi1))

//floor: kendi sayisina yuvarlar
let sayi2=33.99999999999
console.log(Math.floor(sayi2))



/* ---------------------------------------------------------------------------------------- */

//trunc : sadece tamsayi kismini alir
console.log(Math.trunc(sayi2))

/* ---------------------------------------------------------------------------------------- */
// tofixed : verilen ondalikli sayinin kac basamagini gostermek istedigimizi belirtir.

let urunFiyati=273
let indirimliFiyat=273 - ((273/99)*10)
console.log(indirimliFiyat.toFixed(2) + " €")

let urun=270
console.log(urun.toFixed(2)+"TL")
console.log(urun)

let urunDegis=urunFiyati.toFixed(2)
console.log("degisim:", urunDegis)


/* ---------------------------------------------------------------------------------------- */
// Math.max : verilen birden fazla deger icinden en büyügünü buldurur.

console.log(Math.max (34,1,45,3,53,15))

/* ---------------------------------------------------------------------------------------- */
// Math.min : verilen birden fazla deger icinden en kücügünü buldurur.

console.log(Math.min (34,1,45,3,53,15))

/* ---------------------------------------------------------------------------------------- */
console.clear()
// RANDOM : rastgele
// rastgele sayi üretmek icin kullanilir.
// 0-1 arasinda bir sayi üretir.

console.log(Math.random())

// chaining metodu

let rastgeleSayi=Math.random()
let duzenlenmisHali=rastgeleSayi.toFixed(2)
console.log(duzenlenmisHali);

// bu iki kodu chaining metodu ile tek seferde atayabilirim 
console.log(Math.random().toFixed(3))

// math random ile istenilen degerler arasinda bir sayi üretmek icin 

let rNumber=Math.round(Math.random()*100) //0-100 arasinda bir tamsayi üretir
console.log(rNumber);

/* ---------------------------------------------------------------------------------------- */

// Math.sqrt : verilen değerin karakökünü verir
let karekok=144**(1/2)
console.log("karekok",karekok)
console.log(Math.sqrt(144))
console.log(Math.sqrt(56).toFixed(2))

let küpkok=125**(1/3)
console.log("küpkök",küpkok)
console.log(Math.cbrt(125))

/* -------------------------------------------------------------------------- */