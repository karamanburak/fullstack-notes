"use strict"
/* ---------------------------------------------

    OOP - Object Oriented Programing

--------------------------------------------- */

/* ---------------------------------------------
                 CLASSES
--------------------------------------------- */
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.

// Class Declaration: Class Tanimlama
// class PascalNamedClass { ... }

// Class Expression: Class Tanimlama
// const PascalNamedClass = class { ... }


const Car = class {
    propertyName = 'value' // attribute, field

    constructor(parametre1, parametre2 = 'default-value') {
        this.parametre1 = parametre1
        this.parametre2 = parametre2
    } 

    methodName1 () {
        return this
    }

}

//? INSTANCE: Class'tan üretilen nesnelere denir.

const InstanceName = new Car('test')

// console.log(InstanceName);
console.log(InstanceName.methodName1());


