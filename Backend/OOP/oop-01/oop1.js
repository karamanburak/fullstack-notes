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
//? Rest Operator (Key isimleri önemli)
const { name } = home
const { name: adi } = user
//const adi = name
console.log('name >> ', name, adi);