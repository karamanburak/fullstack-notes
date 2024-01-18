// const arr = [1, 'İki', 3]

// const arr1 = new Array(1, 'İki', 3)

// console.log(arr)
// console.log(arr1)

// const arr2 = new Array(100)

// console.log(arr2)

// let bosArr = []

// console.log(bosArr)

// const car = ['Ford', 'Fiat', 'BMW']

// // car = ['mercedes'] // hata verir

// car[3] = 'Mercedes'


// car[3] = 'Audi'
// // console.log(car)

// car[10] = 'Mercedes'


// car[8] = 'Ferrari'
// // console.log(car)

// // console.log(car[9]) //undefined
// // console.log(car[2]) //BMW

// // console.log(car.length)

// console.log(car[car.length-1]) //Array in son elamanını getirir.


// console.log(typeof car)

// const x = 0

// console.log(Array.isArray(car)) //true
// console.log(Array.isArray(x)) // false

// console.log(car instanceof Array) //true
// console.log(x instanceof Array) //false

// const meyve = ['Elma','Kivi', 'portakal']
// const meyve2 = ['Elma','Kivi', 'portakal']


// console.log(meyve == meyve2) //false
// console.log(meyve === meyve2) //false
// console.log([] == []) //false

// const meyve3 = meyve

// console.log(meyve == meyve3) //True
// console.log(meyve3)
// console.log(meyve)

// meyve[3]= 'Armut' //Meyvede yapılan tüm değişiklikler meyve 3 ü de etkiler.
// console.log(meyve)
// console.log(meyve3)


let dob = 2000

let color = 'red'
color = 'yellow'



const arr = [color, 2024 - dob, 'Yas']

console.log(arr)


const arr2 = [color, 'Bir', [1, 2, 3, true, []], {}, false]

console.log(arr2)

console.log(arr2[2])
console.log(arr2[2][3])

arr2[2][4] = arr2
console.log(arr2[2][4])
console.log(arr2)