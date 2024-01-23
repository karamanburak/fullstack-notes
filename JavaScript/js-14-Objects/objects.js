//! -------------------------------------------------------------------------- */
//!                                  OBJECTS                                  */
//! -------------------------------------------------------------------------- */

// Diziler : index numaraları ile erişim sağlanıyor. 0'dan başlayarak artan bir sıralama.

//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ama daha karmaşık veriler için Object(nesne) kullanılır
const dizi = [1, 2, 3, 4, 5, 6]



//! Objectlerde key-value ( Property-value) değerlerini içerir. Bu o nesnenin özelliklerini belirtir.

//! Herhangi bir veriye erişim için property (key) adı kullanılır.

/* -------------------------------------------------------------------------- */
/*                       // Object Oluşturma Yöntemleri                       */
/* -------------------------------------------------------------------------- */

//? 1. Object() class'indan türetme.

const car = new Object() // bos bir object üretmek icin 1. metod

car.brand = "BMW"
car.model = 1990
car.price = 10000
console.log(car.model); // 1990

//? 2. Constructor metodu ile object olusturma

// sanki bir kalip cikariyormus gibidir.

function personelList(a, b, c) {

    this.id = a
    this.name = b
    this.salary = c

}

const personel1 = new personelList(1001, "Burak", 10000)
const personel2 = new personelList(1002, "Elmas", 20000)

console.log(personel1, personel2);
//! Her nesne icin ayri bir kopya olusturulan metodlar, bellek kullanimini arttirir. 


//? 3. OBJECT LITERAL ( en cok kullanilan yöntem)

let personelYapisi = {} // bos bir object üretmek icin kullanilan metod
console.log(personelYapisi);

let personel = {

    name: "Burak",
    lastName: "Karaman",
    birthDate: 1994,
    isMarried: true,
    experiences: ["tester", "developer", "devops"],
    address: {
        city: "potsdam",
        street: "AbzweigBetriebshof",
        no: 50
    },


    calculateAge: function () {
        return new Date().getFullYear() - this.birthDate
    },

    hi: () => {
        return "Hello"
    },

    arrowFunction: () => {
        return this.isMarried
    }

    // Arrow function üretilirken this keyword ünden kurtulmak için yapılmıştır.
    // Arrow functionda this window objesine karşılık gelir.
    // windows objesi içinde workExperiences isimli bir özellik bulamadığından undefined
}


console.log(personel.name, personel.lastName); // Burak karaman
console.log(personel["birthDate"]); // 1994
console.log(personel.calculateAge()); // 30
console.log(personel.hi()); // Hello
console.log(personel.arrowFunction()); // undefined 
console.log(personel.experiences[0]); // tester 
console.log(personel.address.city); // potsdam 

personel.experiences.forEach((work) => console.log(work))
//! yeni bir özellik eklemek icin.
personel.phone = "555-34-34"
console.log(personel);


