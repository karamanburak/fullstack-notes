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
