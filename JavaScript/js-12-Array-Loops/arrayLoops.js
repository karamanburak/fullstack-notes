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

//& filter method
//^ Dizi icerisinde belirtilen kosulu saglayan elemanlarla yeni bir dizi olusturur.
//^ Orjinal array i bozmaz.

// const prices6 = [100, 200, 300, 400, 50, 70]

// const newArr = prices6.filter((price) => price < 250)

// console.log(newArr);

//? 5 harfli kelimeleri yeni bir array de topla
// const words = ['apple', 'banana', 'grape', 'orange', 'kiwi']

// const besHarfli = words.filter((word) => word.length === 5)
// console.log(besHarfli);

//? n harfi ile biten isimleri yeni bir array de topla.
// const names = ['John', 'Jane', 'Robert', 'Susan', 'Steven', 'Katherine', 'Martin', 'Melissa', 'Brian', 'Karen'];

// const lastWord = names.filter((last) => last.endsWith('n'))

// console.log(lastWord);

//? 300 tl üzerinde olanlara 20% altinda olanlara 50% zam yapilacak!

// const prices4 = [100, 200, 300, 400, 50, 70]

// const prices5 = prices4.filter((price) => price >= 300).map((inc) => inc * 1.2)

// console.log(prices5);

// const names = ['John', 'Jane', 'Robert', 'Susan', 'Steven', 'Katherine', 'Martin', 'Melissa', 'Brian', 'Karen'];

// const nHarf = names.filter(name => name.endsWith('n')).map(kelime => kelime.split('').reverse().join(''));
// console.log(nHarf);

//& Reduce
//^ Tek bir eleman döndürür
//^ Array degil deger return eder

// const maaslar = [30000, 20000, 10000, 17000, 7500]

// console.log(maaslar.reduce((toplam, mevcut) => toplam + mevcut, 0));
// const yeniToplam = maaslar.reduce((toplam, mevcut) => toplam + mevcut, 15500);

// console.log(yeniToplam);

//^ Reduce string kullanimi
// const words = ['Merhaba', ' ', 'Dünya', '!']

// const newStr = words.reduce((yeni, suanki) => yeni + suanki, '')

// console.log(newStr);

//? Bir dizi icerisindeki cift sayilari *2 yapip sonrasinda bu cift sayilarin toplamini al

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = numbers
//     .filter((num) => num % 2 === 0) // cift sayilari filtreledik
//     .map((num) => num * 2) // her bir cift elemani 2 katina cikardik
//     .reduce((toplam, yeni) => toplam + yeni, 0) // toplami hesapla

// console.log(result);

//^ CHALLENGE

// ! yukarıdaki string i array e çevirip bütün kelimelerin harflerini büyüt

//!yukarıda array e döndürdüğümüz string cümledeki, T ile başlayan kelimelerin ilk harfini küçült, diğer harflerini normal bırakarak yazdır

const text = "Clarusway Online Career IT TraininG School ThankS for time";

const result1 = text.split(" ").map((word) => word.toUpperCase());
console.log(result1);
const result2 = result1.map((firstLetter) => {
  if (firstLetter.startsWith("T")) {
    return firstLetter[0].toLowerCase() + firstLetter.slice(1);
  } else return firstLetter;
});
console.log(result2);
