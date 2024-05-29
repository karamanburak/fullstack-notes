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


// const Car = class {
//     propertyName = 'value' // attribute, field

//     constructor(parametre1, parametre2 = 'default-value') {
//         this.parametre1 = parametre1
//         this.parametre2 = parametre2
//     }

//     methodName1 () {
//         return this
//     }

// }

//? INSTANCE: Class'tan üretilen nesnelere denir.

// const InstanceName = new Car('test')

// console.log(InstanceName); // Asagidaki console ile ayni sonucu verir.
// console.log(InstanceName.methodName1()); // Yukaridaki console ile ayni sonucu verir.


//? constructor() method

// class Car {
//     isRunning = false
//     constructor(brand, model, year) {
//         this.brand = brand
//         this.model = model
//         this.year = year
//     }
//     runEngine() {
//         this.isRunning = true
//         console.log('runEngine >>','Start Engine');
//         // return this.isRunning
//     }
// }

// const Ford = new Car('Ford', 'Mustang', 1990)

// console.log(Ford); // Car { isRunning: false, brand: 'Ford', model: 'Mustang', year: 1990 }
// console.log(Ford.isRunning); // false
// Ford.runEngine()
// console.log('Ford >>',Ford.isRunning); // true


// const Mazda = new Car('Mazda', '323', 2000)

// console.log('Mazda >>', Mazda.isRunning); // false
// Mazda.runEngine()
// console.log('is running >>', Mazda.isRunning );

//* ------------------------------------- *//
//? INHERITANCE: Miras alma, baska bir Class'in tüm özelliklerini devralma (paren-child iliskisi)
//* THIS = child (current) class
//* SUPER = parent class

// class Vehicle {
//     vehicleActive = false

//     constructor(vehicleType) {
//         this.vehicleType = vehicleType
//     }

//     sayHello() {
//         console.log('Hello');
//     }
// }


// class Car extends Vehicle {
//     isRunning = false

//     constructor(brand, model, year, vehicleType = true) {
//         super(vehicleType)
//         this.brand = brand
//         this.model = model
//         this.year = year
//     }

//     runEngine() {
//         this.isRunning = true

//     }
// }

// const Mercedes = new Car('Mercedes', 'M3000', 1995)

// // console.log('all >>', Mercedes);
// // console.log(Mercedes.vehicleActive);
// // Mercedes.sayHello()

// class Accessory extends Car {
//     constructor(accessoryName, brand, model, year) {
//         super(brand, model, year)
//         this.accessoryName = accessoryName
//     }
// }

// const fordClimate = new Accessory('Bosh Climate', 'Ford', 'Mustang', 1993)
// // console.log('all >>', fordClimate);


/* --------------------------------------------- */
//? Polymorphism: Miras aldığımız sınıfın özellik/methodlarını yeniden yazabilme.
//? Override: Üst metodla aynı isim ve yapıda yeni bir metod yazma. (ezme / iptal etme / önceliğini alma)
//? Overload: Üst metodla aynı isimde ama farklı yapıda (farklı adet/tip) yeni method oluşturma. (aynı anda ikisi de aktif) (JS desteklemez)


// class Vehicle {
//     vehicleActive = false 

//     constructor(vehicleType) {
//         this.vehicleActive = vehicleType
//     }

//     getDetails() {
//         console.log('Vehicle/getDetails started ');
//         return this
//     }
//     getType(vehicleType){
//         // console.log('Vehicle Type: ' + this.vehicleType);
//         console.log(`Vehicle type: ${this.vehicleType}`);
        
//     }
// }

// class Car extends Vehicle {
//     isRunning = false
//     constructor(brand, model, year, vehicleType = true) {
//         super(vehicleType)
//         this.brand = brand
//         this.model = model
//         this.year = year
//     }

//     runEngine() {
//         this.isRunning = true
//         console.log('Engine is running...');
//         return this.isRunning
//     }
//     getDetails() {
//         console.log('Car/getDetails started');
        
//     }
//     getType(vehicleType,brand){
//         console.log(`Vehicle/Brand  type ${vehicleType} ${brand}`);
        
//     }
// }

// const Mercedes = new Car('Mercedes', 'AMG', 2024, 'Sport')

// // console.log(Mercedes); // Car vehicleActive: 'Sport', isRunning: false, brand: 'Mercedes', model: 'AMG', year: 2024

// console.log(Mercedes.vehicleActive);

// Mercedes.getDetails()

// Mercedes.getType('Car') // Vehicle/Brand  type Car undefined
// Mercedes.getType('Car', 'Ford') // Vehicle/Brand  type Car Ford





