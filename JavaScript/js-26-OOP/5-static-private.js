//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve fonksiyonlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//?  nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! ENCAPSULATİON OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation, private degiskenler ve private fonksiyonlar yardimiyla yapilir.
//! ES6 ve sonrasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenlere dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disarisindan da erisilemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.

class Book {

    //! private degisken tanimlamasi
    #id;

    //! static degisken tanimlamasi
    static counter = 0

    constructor(title, author, year) {

        this.title = title
        this.author = author
        this.year = year
        this.#id = 60
        this.getTitle = function () {
            return this.title
        }
        Book.counter++
        Book.id++ // bu satir calismaz (id gizli)
    }

    //? Class icerisinde public metotlar yardimiyla private degiskenler okunabilir.
    //? Bu tip metotlara getter metot denilir.
    //! getter metotlari class icerisinde tanimlanmalidir.

    getId() {
        return this.#id
    }

    //? Class icerisinde public metotlar yardimiyla private degiskenlere yazilabilir.
    //? Bu tip metotlara setter metot denilir.
    //! setter metotlar class icerisinde tanimlanmalidir.

    setId(id) {
        this.#id = id
    }

}



const book1 = new Book("simyaci", "poelho coelho", 1988)
console.log(book1);
console.log(book1.id); // parent izin vermezse undefined

console.log(book1.getId()); // parent taki izin veren getId fonksiyonu ile private id e erisebildim

console.log(book1.title);

book1.title = "Suc ve Ceza"
console.log(book1.title);
// book1.id = 101 // parent izin verirse degistirebiliriz...

book1.setId("111")

console.log(book1.getId());
// Encapsulation edilen verilere getter ve setterlar araciligi ile erisilebilir.

//!static degiskenlere instance üzerinden erisilemez!
//! Static degiskenler classname.property seklinde erisilir.

console.log(Book.counter);
