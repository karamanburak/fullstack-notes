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
console.clear()

/* -------------------------------------------------------------------------- */

/* ---------------------------------- */
//!          STRING DATA TYPE         //
/* ---------------------------------- */
// Tirnaklar icinde ifade edilen herhangi bir deger stringdir.
// stringler harf,isaretler,sayilar
let ad="Javascript"
console.log(ad)

console.log(ad [0])
console.log(ad [3])
console.log(ad [7])

//immutable
ad[7]="u"
console.log(ad)

ad="Node.js"
console.log(ad)

/* -------------------------------------------------------------------------- */
// Escape characters // Kacis karakterleri
// \ kacis karakterleri \ ile tanimlanir
// \n yeni bir satira gecmeyi saglar
// \t tab islemi yapar (8 karakter bosluk birakir)

let deger="Merhaba, bu Elmas\'in ödevidir."
console.log(deger)
let siir="Yasamak tek bir agac gibi hür ve\nbir orman gibi kardescesine"
console.log(siir)

let developer="Frontend\tDeveloper"
console.log(developer)
console.clear()


/* -------------------------------------------------------------------------- */

//! String birlestirme

// 1.concat methodu

let adi="Ali"
let soyad="Güclü"

// string1.concat(string2)
console.log(adi.concat(soyad))
/* -------------------------------------------------------------------------- */
// 2. + isareti ile concatanation (stringleri birlestirme islemi)

console.log(adi+soyad)
console.log("Adiniz Soyadiniz:"+adi+soyad)

//! Template literal yöntemi :=> ES6 ile gelen özelliklerden

// stringleri dinamik olarak kullanmayi saglar.
// stringler yazilirken degiskenlerde kullanabilmemizi saglar

adi="Ali"
soyad="Seven"
let job="Fullstack developer"

// 2. yöntem ile
console.log("Personelimiz "+adi+" "+soyad+" kurumumuzda "+job+" olarak calismaktadir.");
// template literal yöntemi ile
console.log(`Personelimiz ${adi} ${soyad} kurumumuzda ${job} oalrak calismatadir`);


/* -------------------------------------------------------------------------- */
console.clear()
 /* ---------------------------------- */
 /*          BOOLEAN DATA TYPE         */
 /* ---------------------------------- */
// true - false degeri tutar

let isOpen=true
console.log(typeof isOpen)

let isSmall=4>15
console.log(isSmall)

sifre="3de4"

let kontrol=(sifre==="3de4")
console.log(kontrol)
console.log(typeof kontrol)


/* -------------------------------------------------------------------------- */
 /* ---------------------------------- */
 /*         UNDEFINED DATA TPYE        */
 /* ---------------------------------- */

 //bir degiskene bir deger atamadigimiz zaman undefined
 // bir fonksiyon geri deger döndürmüyorsa undefined olur

 // undefined: tanimsiz

 let val
 console.log(val)

 val=345
 console.log(val)


/* -------------------------------------------------------------------------- */
/* ---------------------------------- */
/*           NULL DATA TYPE           */
/* ---------------------------------- */

let empty=null
console.log(empty)

// js bug
console.log(typeof empty)


/* -------------------------------------------------------------------------- */
/* ---------------------------------- */
/*       NONPRIMITIVE DATA TYPE       */
/* ---------------------------------- */
// referans tipli degiskenler
//array
let liste=["kalem","silgi", "defter"]
console.log(liste);

// Object
let nesne={ad:"Ali",soyad:"Güven",yas:"29"}
console.log(nesne);

