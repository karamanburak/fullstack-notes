// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------

//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır

//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):
// Function Constructor (Fonksiyon Oluşturucusu):


//! * --------Function-Declaration----------------------------*/
// 1-Fonksiyonlar   function anahtar kelimesi ile tanımlanır
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.

//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasından önce veya sonra olabilir.
console.log("************ 1- FUNC DECLARATION *************");

//*Örnek1:****************************************************************/
//?Fonksiyonun tanımlanması

// yazdir() // invoke ya da call islemi

//^ EXAMPLE - 1

function yazdir() {
    console.log("Bugün hava cok güzel");
}

yazdir()

//^ EXAMPLE - 2: Parametreli Fonksiyon

function adYazdir(ad, ikinci, ücüncü) {
    console.log(ad, ikinci, ücüncü);
}

adYazdir("burak", "elif", "abdulkadir")
adYazdir("saban", "esra", "ömer")

//^ EXAMPLE - 3 Parametreli, dönüs degerli (return)

function yasHesapla(isim, tarih) {

    console.log(`Benim adim ${isim} ve ben ${2023 - tarih} yasindayim.`);
    return 2023 - tarih
}

const fatma = yasHesapla("fatma", "1990"); // 33
const emre = yasHesapla("emre", "1980")  // 43
const kagan = yasHesapla("kagan", "1995") // 28

//? lütfen fatma emre ve kaganin yaslarinin ortalamasini aliniz!

console.log((fatma + emre + kagan) / 3);


//^ EXAMPLE - 4 Parametreli, dönüs degerli

//? tek cift sorgulamasi

console.log(isEvenOdd(5)); // call invoke
console.log(isEvenOdd(12357)); // call invoke
console.log(isEvenOdd(-134574)); // call invoke

function isEvenOdd(sayi) {

    // const sonuc = sayi % 2 == 0 ? "cift sayidir" : "tek sayidir"
    // return sonuc
    return sayi % 2 == 0 ? "cift sayidir" : "tek sayidir"
}

isEvenOdd()