//& foreach method
//^ Array methodudur. Stringde kullanilamaz.
//^ Break, ve continue methodlari kullanilmaz. Islem sona kadar devam eder.
//^ Empty elemanlari atlar.
//^ Orjinal arrayi degistirmez.
//^ Void bir metotdur return etmez.
//^ Normal for a göre daha yavas calisir.

// const prices = [100, 200, 300, 400, 50, 70]

// prices.forEach((a) => console.log(a));

// Array elemanlarinin toplamini al

// let toplam = 0

// prices.forEach((a) => toplam += a)
// console.log(toplam / prices.length);


// const prices2 = [100, 200, 300, 400, 50, 70]


// tüm elemanlarin iki katini alarak orjinal array i degistir.
// prices2.forEach((price, i, arr) => {
//     arr[i] = price * 2

// })
// console.log(prices2);

// const prices3 = [100, 200, 300, 400, 50, 70]


// prices3.forEach((price) => {
// if (price == 200) break //! break kullanilamaz
// if (price == 200) continue //! continue kullanilamaz
//     console.log(prices3);
// })

//& Map Method
//^ Verilen array elemanlari üzerinde istenilen islemleri yaparak yeni bir array return eder.
//^ Orjinal arrayi bozmaz

// const cars = ['audi', 'ferrari', 'bmw', ' fiat', 'skoda']

// const newCars = cars.map((car) => car.toUpperCase())

// console.log(newCars);
// console.log(cars);


// const prices4 = [100, 200, 300, 400, 50, 70]
//? 300 tl üzerinde olanlara 20% altinda olanlara 50% zam yapilacak!

// prices4.map((price, i, arr) => {

//     if (price >= 300) {
//         arr[i] = price * 1.2
//     } else {
//         arr[i] *= 1.5
//     }


// })
// console.log(prices4);


// const prices5 = [100, 200, 300, 400, 50, 70]
// console.log(prices5);

// const dolar = 30.2
// const euro = 33.6

// const dolarArr = prices5.map((price) => (price / dolar).toFixed(2));
// const euroArr = prices5.map((price) => (price / euro).toFixed(2));

// console.log(dolarArr, euroArr);
