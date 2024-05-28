"use strict"

/* kodu çalıştırmak için */
// nodemon oop1
// nodemon oop1.js

// console.log("Merhaba Dünya");

/* ----------------------------------------------------------------

OOP - Object Oriented Programming

---------------------------------------------------------------- */

/* ----------------------------------------------------------------

    OBJECTS 
---------------------------------------------------------------- */
/*
const camelCaseNameObject = {
    propertyName: 'value',
    methodName: function() {
        return 'this id a method.'
    }
}

console.log('full >> ',camelCaseNameObject);
console.log('propertyName >> ', camelCaseNameObject.propertyName);
console.log('methodName >> ', camelCaseNameObject.methodName);
console.log('methodName() >> ', camelCaseNameObject.methodName());
*/

// Tabnine: AI Autocomplete & Chat for Javascript, Python, Typescript, PHP, Go, Java & more

/*
const Car = {
    brand: 'Toyata',
    model: 'Yaris',
    year: 2011,
    colors: ['red', 'green', 'gray', 'yellow', 'blue', 'cyan'],
            // 1        2       3       4       5       6
            // 0        1       2       3       4       5
    startEngine: function() {
        return "Engine Started."
    },
    details: {
        color: 'red',
        engineSize: 3900
    }
}

console.log('all >> ',Car);
console.log('startEngine >> ', Car.startEngine());

// arabanın rengini yazdırma (green)

console.log('araba rengi >> ', Car.colors[2]);

// arabanın rengini son rengi otomatik yazdırma

console.log('son renk >> ', Car.colors[Car.colors.length - 1]);

// engine size yazdıralım
console.log('engineSize >> ', Car.details.engineSize);
console.log('engineSize >> ', Car.details['engineSize']);

console.log('startEngine >> ', Car['startEngine']());
*/

//? THIS Keyword
/*
var degisken_1 = "test"
var degisken_2 = "user"

var name = "test"
var surname = "user"
*/
/*
const user = {
    name: 'Test',
    surname: 'User',
    fullName: function () {
        return this.name + ' ' + this.surname
    }
}

console.log('all >> ',user);
console.log('full name >> ', user.fullName());
*/

//? ARRAY DESTRUCTURING

const colors = ['black', 'blue', 'white', 'red', 'green', 'yellow']
/*
console.log('colors >> ', colors);
const color_1 = colors[0]
console.log('color 1 >> ', color_1);
const color_2 = colors[1]
console.log('color 2 >> ', color_2);
console.log('colors >> ', color_1, color_2);

const [a,b,c,d,z,e] = colors
console.log(e, a,b,c,d,z,e);
*/
/*
const [colorOne, colorTwo, ...colorList] = colors
console.log(colorList);

const newColors = [...colorList, 'gray', 'chin']
console.log('new colors >> ', newColors);
*/

/*
const home = {
    name: 'Home Test',
    surname: 'User',
}

const user = {
    name: 'Test',
    surname: 'User',
    birthDay: 1973,
    car: {
        brand: 'toyota'
    }
}
*/
//? Rest Operator (Key isimleri önemli)
/*
const { name } = home
const { name: adi } = user
//const adi = name
console.log('name >> ', name, adi);
*/

const Car = {
    brand: "Toyota",
    model: "Corolla",
}

const Details = {
    year: 2011,
    color: "Red",
}

const CarDetails = {...Car, ...Details}
// console.log('CarDetails >>', CarDetails); // CarDetails >> { brand: 'Toyota', model: 'Corolla', year: 2011, color: 'Red' }

const newCarDetails = {...CarDetails,gear: 'automatic'} 
// console.log('NewCarDetails >>',newCarDetails); // NewCarDetails >> { brand: 'Toyota', model: 'Corolla', year: 2011, color: 'Red', gear: 'automatic'}

//? Object to JSON 
const json = JSON.stringify(newCarDetails)
// console.log('JSON >>' , json); // JSON >> { "brand": "Toyota", "model": "Corolla", "year": 2011, "color": "Red", "gear": "automatic" }

//? JSON to Object
const obj = JSON.parse(json)
// console.log('Obj >>', obj);


//? Object to Array
//^ Keys 7 // obje icinde map ile dönmek istersek önemli bir konudur!
const keysInArray = Object.keys(newCarDetails)
console.log('keysInArray >>',keysInArray);

//^ Values obje icinde map ile dönmek istersek önemli bir konudur!
const valuesInArray = Object.values(newCarDetails)
console.log('valuesInArray >> ', valuesInArray);

//^ Keys-Value Array obje icinde map ile dönmek istersek önemli bir konudur!
const objInArray = Object.entries(newCarDetails)
console.log('obj >>', newCarDetails);
console.log('objInArray >>', objInArray);

/*  ---------------------
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName + " " + this.year;
    }
}
const member = {
    firstName: "Hege",
    lastName: "Nilsen",
    year: 50
}
let fullName = person.fullName.bind(member);
console.log(fullName(), '------', person.fullName()); // Hege Nilsen 50 ------ John Doe undefined
----------------------- */

//* --------------------------------- *\\
        //^  Object Constructor
//* --------------------------------- *\\

const ConstructorFunction = function() {
    this.property = 'value'
}


//* ---------------------------------- *\\
//? NEW KEYWORD
const CarConstructor = function (brand,model,year = 1973) {
    this.brand = brand,
    this.model = model,
    this.year = year,
    this.fullText = function() {
        return this.brand + ' ' + this.model + ' ' + this.year
    }
} 

const newCar = new CarConstructor('toyata', 'yaris')
// console.log('newCar >>', newCar);
// console.log('full text >>', newCar.fullText()); // full text >> toyata yaris 1973

const newNewCar = new CarConstructor('toyata', 'yaris', 2011)
// console.log('full text >>', newNewCar.fullText()); // full text >> toyata yaris 2011

let year
year = 101
if(year && year > 100){ // birinci kosul uygunsa ikinci kosula bakar.
    console.log('year >>', year);
}


let day
day = 9
if(day || day > 10){ // kosullardan herhangi birinin uygunluguna  bakar.
    console.log('day >>', day);
}






