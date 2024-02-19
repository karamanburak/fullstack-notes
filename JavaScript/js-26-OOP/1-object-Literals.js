//* ======================================================
//*                    (OOP)
//* Object Oriented Programming
//* ======================================================

//*object literals


const book1 = {

    title: "Karamazov Kardesler",
    author: "Dostoyevski",
    year:1880,
    summaryFunction:function () {
        console.log(`${this.title} kitabini ${this.year} yilinda ${this.author} yazmistir.`);
    }
    
}

console.log(book1);
book1.summaryFunction();


const book2 = {
    title: "Yaprak Dokumu",
    author: "Resat Nuri Güntekin",
    year: 1930,

    summaryFunction: function () {
        console.log(
            `${this.title} kitabını ${this.year} yılında ${this.author} yazmıştır`
        );
    },
};

book2.summaryFunction()

//? object literals yöntemi ile fazla sayıda yeni  Object ler oluşturmak oldukça zahmetlidir, ayrıca programcılık yaklaşımı açısından da çok tekrar içerdiği için uygun değildir
// DRY (Dont Repeat Yourself) Prensibi için uygun değildir
//? SOLUTION:  Object Constructor kullan (ES5 and ES6)
