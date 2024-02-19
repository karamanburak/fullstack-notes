//* ======================================================
//*             OOP - Classes (ES6)
//* ======================================================

//? Classlar,  objects oluşturmak için template (şablondur).
//? JS deki Classes,   prototypes üzerine kuruludur,  aynı zamanda ES5 syntax ından farklı bazı syntax and semantics e sahiptir .
//? Aslında  class keyword ü  ES6 da tanıtılmıştır, but is syntactical sugar (yalnızca dili kullanmanın bazı yönlerini daha kolay ve genel olarak daha keyifli hale getirmek için eklenen bir dil özelliği için kullanılan bir terimdir.), JavaScript  prototype-based dir.

class Book {

    constructor(a,b,c){

        this.title = a
        this.author = b
        this.year = c

        this.summaryFunction = function () {

            return `${this.title} kitabını ${this.year} yılında ${this.author} yazmıştır`
        }
    }

    //? Bu alt süslüye yazdiklarimiz direk kalibin prototype alanina gider (ES6 ile biz belirtmeden)
    yilHesapla(){

        return 2024-this.year
    }

}

//? new keyword ü  Book Constructor ı parametrelerle çağırır.
//? Constructor, Book object in bir örneğini kalıbını oluşturur.
//? Constructor daki tüm variablelar ve functionlar, oluşturulan her  single örneğe (instance a cocuklara) eklenir

const book1 = new Book("Safahat", "M.Akif Ersoy", 1911)

console.log(book1);
console.log(book1.author);
console.log(book1.yilHesapla());
console.log(book1.summaryFunction());

//? INHERITANCE

//^ Book object kalibindan dergi object ine kalip getir
class Dergi extends Book {

    //^ super keywordu ile atadan alinanlar
    constructor(author, title, year,d){

        super(author,title,year)


        //^ class in kendine ait özellikler
        this.mounth = d;

    }

}

const dergi1 = new Dergi("kasagi", "Omer Seyfettin", 1926, "Aralik")

console.log(dergi1);
console.log(dergi1.year);
console.log(dergi1.yilHesapla());

class Gazete extends Book {

    constructor(author,title,year,d,e){

        super(author, title,year)
        this.mounth = d
        this.price = e
    }

}

const gazete = new Gazete("Sabah", "", 1932, "Aralik", 20)
console.log(gazete);


//! extends edildiği zaman, atadan gelen her veriyi kullanmak zorundayız, en fazla value kısmını boş " " bırakabiliriz
