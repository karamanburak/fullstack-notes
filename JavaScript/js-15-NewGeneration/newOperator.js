//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================

const car = {
    title: "BMW",
    model: 1990,
    engine: 1.6
}


//* 1. Klasik yol

console.log(car.engine);
console.log(car["engine"]);


//* 2. yol destructuring"
const { title, model } = car
console.log(title);
console.log(model);
// console.log(engine);


const arabalar = {
    car1: {
        marka: "BMW",
        model: 1990,
        renk: "red",
    },
    car2: {
        marka: "MERCEDES",
        model: 1980,
        renk: "white",
    },
    car3: {
        marka: "AUDI",
        model: 2000,
        renk: "gray",
    },
};

console.log(arabalar.car2.marka);

const { car1, car2, car3 } = arabalar
console.log(car2.marka);
console.log(car3.model);

const { marka, renk } = car1

console.log(marka);
console.log(renk);

const { marka: marka2, renk: renk2 } = car2
console.log(marka2);
console.log(renk2);

//! car1 için marka model ismini kullandık, o yüzden car2 de yeni isimler verdik. ilk object i oluştururken key leri (marka,model..) farklı verebilirdik, bu sayede yeni isim vermekle uğraşmazdık, ama o zamanda for in ile dönerken her bir marka yı yazdır diyemezdik, çünkü car2 nin içinde mesela marka2 yazıyor olacağından, onu tanıyamazdı.

//* object- object gezinme ******//

for (let i in arabalar) {
    console.log(i);
    console.log(arabalar[i].marka);
}


//* ornek: Array-Object gezinme-DEST
const people = [
    {
        name: "Mustafa",
        surname: "Gertrud",
        job: "developer",
        age: 30,
    },
    {
        name: "Halo",
        surname: "Müller",
        job: "tester",
        age: 35,
    },
    {
        name: "Mehmet",
        surname: "Rosenberg",
        job: "team lead",
        age: 40,
    },
    {
        name: "Ozkul",
        surname: "Gutenberg",
        job: "developer",
        age: 26,
    },

    {
        name: "Baser",
        surname: "Shaffer",
        job: "tester",
        age: 24,
    },
];


//* 1. yol

people.forEach((person) => {


    // console.log(person.name);
    // console.log(person.surname);
    // console.log(person.job);

    const { name, surname, job } = person

    console.log(name);
    console.log(surname);
    console.log(job);


})

//* 2. yol 

people.forEach(({ name, surname, job }) => {
    console.log(name);
    console.log(surname);
    console.log(job);
})

//! Fonksiyonlar object parametreleri DESTRUCTURING yapabilir.

const control = (data) => {

    console.log(data);
    console.log(data.name);

    const { name, color, star } = data
    console.log(name);
    console.log(color);

}
control({ name: "GS", color: "red-yellow", star: 4 })
control({ name: "BJK", color: "black-white", star: 3 })


const control2 = ({ name, color, star }) => {

    console.log(name);
    console.log(color);

}

control2({ name: "Bayern München", color: "red-white", star: 5 })


//*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

//? ------------------------------------------------------
//?  REST =>>[...name]=diziden (ya da object den) alınmayan, geri kalanları yeni bir (diziyse) diziye,(object se)object e atıyor
//? ------------------------------------------------------

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//*REST OBJECT***************************************

const personel = {
    pName: "Johny",
    surname: "DEPP",
    job: "actor",
    age: 55,
    salary: 30000

};

const { pName, surname, ...rest } = personel
console.log(pName);
console.log(rest);
console.log(rest.job);

//? Object kopyalama (rest)


//* Orjinal obje ile ayni sartlarda bir kopya olusturma
const twicePersonel = personel
console.log(twicePersonel);

//* rest yöntemi ile kopya olusturma

const { ...personel2 } = personel
console.log(personel2);


//***** orjinal diziyle aynı şartlarda bir kopya oluşturduk, bu yüzden kopyada yapılan değişiklik orjinal diziyi de etkiledi */
twicePersonel.job = "father"
console.log(personel);
console.log(personel2);
console.log(twicePersonel);


//*** orjinal diziden farklı bir kopya oluşturduğumuz için, bu kopyaya yapılan değişiklik orjinal diziyi bozmaz*/
personel2.age = 12
console.log(personel);
console.log(personel2);
console.log(twicePersonel);

//? Array kopya (rest)

const autos = ["anadol", "renault", "tofas", "ferrari"];

const twiceAutos = autos // assign etmek

const [...autos2] = autos // ayri bir kopya

autos2.push("bmw")
console.log(autos);
console.log(autos2);
console.log(twiceAutos);

twiceAutos.unshift("mercedes")
console.log(autos);
console.log(autos2);
console.log(twiceAutos);

//! 2- bir fonksiyonun argument lerini diziye cevirmek icin kullanilabilir.

//^ Example -1
//* Wrong solution

const sum = (x, y) => x + y

console.log(sum(1, 2, 3, 4, 5, 6))

//* Right solution

const sum2 = (...x) => console.log(x.reduce((toplam, arr) => toplam + arr, 0));

sum2(1, 2, 3, 4, 5, 6)

//^ Example -2

const show = (name, surname, ...title) => {
    // console.log(title);

    console.log(`${name} ${surname} is a ${title.join(" and ")}`);


}
show("asiye", "yildiz", "developer", "mom", "teacher", "computer science")


//? ------------------------------------------------------
//?  SPREAD==>> parçala (yapısını boz)-> istenilen diziye ekle,içinde gezin vs
//? ------------------------------------------------------

//* Example: people (object li ) dizisinden yaşları değişmiş olarak yeni bir object li dizi oluşturalım.

const humans = [
    {
        name: "Mustafa",
        surname: "Gertrud",
        job: "developer",
        age: 30,
    },
    {
        name: "Halo",
        surname: "Müller",
        job: "tester",
        age: 35,
    },
    {
        name: "Mehmet",
        surname: "Rosenberg",
        job: "team lead",
        age: 40,
    },
    {
        name: "Ozkul",
        surname: "Gutenberg",
        job: "developer",
        age: 26,
    },

    {
        name: "Baser",
        surname: "Shaffer",
        job: "tester",
        age: 24,
    },
];

const newHumans = humans.map((person) => ({
    name: person.name,
    surname: person.surname,
    job: person.job,
    age: person.age + 5,
}));
console.log(newHumans);


//* SPREAD  obje de değişmesini istemediğimiz elemanlar için ... kullanıyoruz ÖNEMLİ***!!!!!
// ...person=  name: person.name,
//   surname: person.surname,
//   job: person.job,
const yeniInsan = humans.map((person) => ({
    ...person,
    age: person.age + 5,
}));

console.log(yeniInsan);


//^ Example

const zeug = ["Aircraft", "Helicopter", "Bicycle"]
const otomobiles = ["Trucks", "Bus", "Car", "SUV"]

console.log(zeug, otomobiles);
console.log(zeug.concat(otomobiles))

console.log([...zeug, "Jeep", ...otomobiles, "ATV"]);

// ******************* job:father olsun ve location:USA ekleyelim (spread ile yapalım) sonucu yeni bir diziye atalım


const personel3 = {
    pName: "Johny",
    surname: "DEEP",
    job: "actor",
    age: 55,
    salary: 30000

};

const new2 = { ...personel3, job: "father", location: "USA" }
console.log(new2);

