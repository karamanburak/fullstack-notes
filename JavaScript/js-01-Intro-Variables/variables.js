
/* ---------------------------------- */
/*     Global Scope ve Locak Scope    */
/* ---------------------------------- */


//? Global scope:Program içerisinde fonksiyonların dışında tanımlanan ve heryerden ulaşılabilen alan

//global alan - global scope
degiskenAdi="Javascript"
degiskenSayi=56
console.log(degiskenAdi)

//? local Scope: Bir block ici {} ( fonksiyonlarin ici, döngü icleri, if block icleri)

{
    //local alan
    console.log("bu alan local alan");
}



/* ---------------------------------- */
/*            Var Kullanimi           */
/* ---------------------------------- */
// var => degisken tanimlama türü : her aladan ulasilabilir ve degistirilebilir.

var x=5


x=15
console.log(x);
{
    console.log("lcoal alandayim")
    x=45
    console.log(x);
}

console.log(x*5); // sonucu 75 beklerken 225 verecektir.


/* ---------------------------------- */
/*           CONST KULLANIMI          */
/* ---------------------------------- */

// const: constant: Sabit
//! const türünde bir degere local ve global alanda ulasabilir

const pi=3.14
const sayi1=15
console.log("Global alanda pi:", pi)


{
    const pi=3
    console.log("Local alanda pi:", pi)
    
}
console.clear();
//LET KULLANIMI

// const ile tanimladigimiz degeri degistiremeyiz ama let ile tanimladigimiz degeri degistirebiliriz.

// let sayi2=15
// const sayi2=25

let toplam=0
toplam=25+15
console.log(toplam);

{
    
    console.log(toplam);
    toplam=60
    console.log(toplam);
}

console.log(toplam);