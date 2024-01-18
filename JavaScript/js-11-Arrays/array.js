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


// let dob = 2000

// let color = 'red'
// color = 'yellow'



// const arr = [color, 2024 - dob, 'Yas']

// console.log(arr)


// const arr2 = [color, 'Bir', [1, 2, 3, true, []], {}, false]

// console.log(arr2)

// console.log(arr2[2])
// console.log(arr2[2][3])

// arr2[2][4] = arr2
// console.log(arr2[2][4])
// console.log(arr2)



//! Array Metodlari
//^ EXAMPLE slice()

// const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Brown']

// const colors2 = colors.slice() // parametre vermezsek tümünü kopyalar.

// colors[5] = 'White' // colors2 yi etkilemez, degistirmez!

// console.log(colors);
// console.log(colors2);

// const colors3 = colors.slice(2) // Ikinci parametre verilmezse ilk parametrenin oldugu yerden böler.
// console.log(colors3);

// const colors4 = colors.slice(2, 4) // 2 den 4'e kadar olan kismi alir. 4 harictir.
// console.log(colors4);
// console.log(colors[-1]); // undefined negatif index ile cagirilmaz!

// console.log(colors[colors.length - 1]); // sondaki ögeyi döndürür. White

// const colors5 = colors.slice(-2)

// console.log(colors5);

// const colors6 = colors.slice(-4, -1) // Green, blue, yellow

// console.log(colors.slice(-2, -4)); // Limit disi bos array
// console.log(colors.slice(-2)); // Son ıkı elemanı getirir. Yellow, Brown


//^ EXAMPLE push() = Arrayin sonuna elaman ekler ve yerini array'in eleman sayisini return eder!

// const colors = ['Red', 'Green']

// let newLength = colors.push('Blue')

// console.log(newLength); // 3
// console.log(colors.push('Yellow')); // 4

// console.log(colors.push()); // length ile ayni olur = 4
// console.log(colors.length); // 4

// colors.push('Blue', 'Pink') // vverdigimiz sira ile sona ekler
// console.log(colors);

// const colors2 = ['Blue', 'Yellow']

// colors.push(colors2) // ['Red', 'Green',['Blue', 'Yellow']]
// colors.push(...colors2) // spread parametresi ile tek tek ekler.
// console.log(colors); // ['Red', 'Green', 'Blue', 'Yellow']

//^ EXAMPLE pop() = dizinin son elamanini siler. Sildigi elamani return eder.

// const colors = ['Red', 'Green', 'Blue', 'Yellow']

// const removedItem = colors.pop()

// console.log(colors);
// console.log(removedItem);
// console.log(colors.pop());

//^ EXAMPLE unshift() = Dizinin basina eleman ekler. Yeni olusan dizinin uzunlugunu return eder.

// const colors = ['Blue', 'Yellow']

// const newLength = colors.unshift('Red', 'Green')

// console.log(colors);
// console.log(newLength);
// console.log(colors.unshift()); // Bos verirsek eleman sayisini verir.

// const colors2 = ['White', 'Brown']

// colors.unshift(colors2) // 0 nci indekse arra olarak ekler.


// colors.unshift(...colors2) // Spread operatörü ikinci arrayin tüm elemanlarini basa ekler.
// console.log(colors);



//^ EXAMPLE shift() = Dizinin 0'nci indeksindeki degeri siler. Sildigi degeri return eder.

// const newColors = ['White', 'Brown', 'Red', 'Green', 'Blue', 'Yellow']

// const silinenDeger = newColors.shift()

// console.log(newColors); //& ['Brown', 'Red', 'Green', 'Blue', 'Yellow']
// console.log(silinenDeger); //& White

// delete newColors[2] //& Index'i empty haline getirir. Sadece 'Green' degerini siler. Yeri empty olarak kalir. Önerilmez!!!
// newColors[2] = undefined //& delete yerine bunu kallnabiliriz.
// console.log(newColors);

//^ CHALLENGE
// const arr1 = ['red', 'blue', 'purple', 'white', 'orange']

// const arr2 = arr1.shift()
// const arr3 = arr1.pop()
// arr1.push(arr2)
// arr1.unshift(arr3)

// console.log(arr1);

//^ EXAMPLE splice() Üc ise yarar. 1-) eleman siler. 2-) eleman ekler. 3-) eleman degistirir.
//! Islem sonunda varsa silinen elemanlari yoksa bos array döndürür.

const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Brown']

// colors.splice(0) // Tüm arrayi bos array haline getirir.

// colors.splice(1,1) // 1. indexe git 1 tane sil

// colors.splice(2, 1, 'white', 'pink') // 2. indexe git 1 eleman sil ve white ve pink'i onun yerine ekle.

// console.log(colors.splice(4, 0, 'white', 'pink')); // Yellow ve Brown arasina bir deger silmeden White ve Pink ekle

// console.log(colors.splice(4, 1, 'white', 'pink')); // Brown

// let result = colors.splice(2, 2) //  ['Blue', 'Yellow'] siler ve return eder.


//^ CHALLENGE
// const arr1 = ['Red', 'blue', 'purple']
// const removed = arr1.splice(0, 0, 'yellow')

// console.log(arr1);
// console.log(removed);

//^ EXAMPLE concat() = Arrayleri birlestirir. Orjinal array'i (dizi) degismez!

// const color1 = ['red', 'green']
// const color2 = ['blue', 'orange']
// const color3 = ['10', 'true']


// console.log(color1.concat(color2, color3)); // ['red', 'green', 'blue', 'orange', '10', 'true']

// console.log(color1 + color2); //  Array'i bozar. red,greenblue,orange

// const newArr = color1.concat('yellow', 2, color3, color2, color1) // ['red', 'green', 'yellow', 2, '10', 'true', 'blue', 'orange', 'red', 'green']

// console.log(newArr);

//^ EXAMPLE indexOf() = Soldan saga dogru arar ilk eslesen elementin indexini döndürür. Ikinci parametre opsiyoneldir. Ikinci parametre verilirse aramaya o indexten itibaren baslar.
//! Bulamazsa -1 döndürür!

/* const colors = ['Red','Green', 'Blue','Green','Brown']
console.log(colors.indexOf('Green')) //1
console.log(colors.indexOf('Green',2)) //3
console.log(colors.indexOf('green')) //-1


if(colors.indexOf('Green') == -1){
    colors.push('green')
    console.log(colors)
}else{
    console.log('Bu elaman zaten var')
    console.log(colors)
} */


//^ lastIndexOf () =  Sagdan sola dogru arar ilk eslesen elementin indexini döndürür. Ikinci parametre opsiyoneldir. Ikinci parametre verilirse aramaya o indexten itibaren baslar ve de bulamazsa -1 döndürür.

/* const colors = ['Red','Green', 'Blue','Green','Brown']

console.log(colors.lastIndexOf('Green')) //3
console.log(colors.lastIndexOf('Green',2))//1
console.log(colors.lastIndexOf('green'))//-1 */


//^ EXAMPLE reverse() = Array elemanlarinin sirasini sondan basa dogru degistirir.
//! Orjinal Arrayi degistirir/bozar!

/* const colors = ['Red','Green', 'Blue','Green','Brown']
colors.reverse()
console.log(colors) //['Brown', 'Green', 'Blue', 'Green', 'Red'] */


//^ EXAMPLE join() = Arrayin tüm elemanlarini verilen seperatore (ayirici) göre stringe cevirir.
//! Orjinal arrayi degistirmez!

/* const arr = [ 'C', 'l', 'a', 'r', 'u', 's', 'w', 'a', 'y' ]

console.log(arr.join()) //C,l,a,r,u,s,w,a,y
console.log(arr.join('')) //Clarusway
console.log(arr.join('*'))//C*l*a*r*u*s*w*a*y

const cw = arr.join('')

console.log(cw) //Clarusway

const arr2 = [ 'C', 'l', 'a', 'r', ,'u', 's', 'w', 'a', 'y',[2019,'CW'] ]
console.log(arr2.join()) //C,l,a,r,,u,s,w,a,y,2019,CW
console.log(arr2.join('')) //Clarusway2019,CW
console.log(arr2.join('_')) //C_l_a_r__u_s_w_a_y_2019,CW
console.log(arr2[10].join('')) //2019CW*/

//^ EXAMPLE sort() = Arrayin icindeki elemanlari siralar. Default olarak string siralamsi yapar.
//! Orjinal array i degistirir.

/* const arr = [ 'red', 'blue', 'Purple', "white", "orange" ] //['Purple', 'blue', 'orange', 'red', 'white']

arr.sort()

console.log(arr)

const arr2 = [ 55, 5, 22,23, 2, 11,12, 1, 111 ]

arr2.sort()
console.log(arr2) //[1, 11, 111, 12, 2, 22, 23, 5, 55] */