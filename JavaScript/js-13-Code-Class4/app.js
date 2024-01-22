/*
 Array (Dizi) metodlari
pop(): Dizinin son elemanini siler.
shift(): Dizinin basindaki elemani siler.
push(): Dizinin sonuna eleman ekler.
unshift(): dizinin basina eleman ekler.
reverse(): Diziyi tersine cevirir.
splice(): (Baslangic indeksi, kac eleman silinecek, eklenecek eleman(item1,item2...))
sort(): siralama yapar. (stringlerdeki ifadelerde ascii kodlarina göre alfabetik siralama)
sort ((a-b)=> a-b)
includes(deger): iceriyor mu? (true - false)
indexOf(deger): degerin kacinci indexte oldugunu verir.
join(" "): bir diziyi birlestirerek stringe dönüstürür.
slice(): diziden bir parcayi almamizi saglar.
concat(): iki diziyi birlestirir.
every(): dizideki her eleman icin bir callback fonksiyon calistirir ve callback fonksiyondaki sarti kontrol eder. Eger tüm elemanlar sarti sagliyorsa "true" deger döner. (Boolean deger döndürür.)
const numbers = [45, 16, 34, 23]

numbers.every((num) => num > 18) // false

console.log(numbers);
some(): dizideki her eleman icin bir callback fonksiyon calistirir ve callback fonksiyondaki sarti kontrol eder. Eger tek bir eleman bile sarti sagliyorsa "true" döndürür.
const numbers1 = [13, 14, 12, 11]

numbers1.some((num) => num > 18) // false
console.log(numbers1);
*/


/* -------------------------------------------------------------------------- */
/*                                                                            */
/* -------------------------------------------------------------------------- */
/*
map: Bir dizi icin bir callback fonksiyon calistirir ve her elemen icin o fonksiyondan cikan sonucu yeni bir diziye aktarir.
forEach: Bir dizi icin bir callback fonksiyonu calistirir. Geriye bir deger döndürmez.
filter: Bir dizide kosulu kontrol edip sadece kosulu saglayanlari döndürür.
reduce: Dizideki elemanlari toplayarak tek bir deger döndürür. Verilen islemler tüm elemanlar icin yapilip tek bir sonuc döndürür.
*/

//? Girilen sayilarin ortalamasi
//^ Klasik for metod
// const numbers = [34, 56, 56, 87, 90]
// let toplam = 0
// const ortalama = () => {

//     for (let i = 0; i < numbers.length; i++)
//         toplam += numbers[i]

//     return toplam

// }

// console.log(ortalama() / numbers.length);

//^ reduce ile
// function avarage(array) {

//     let valid = array.filter((num) => num === typeof "number" && !isNaN(num))

//     if (valid.length > 0) {

//         let toplam = array.reduce((a, b) => a + b, 0);
//     }
//     return toplam / array.length;
// }

// const array = [34, 56, 56, 87, 90]
// console.log(avarage(array));

//?  Girilen bir cümledeki kelime sayisini bulan fonksiyon

// const sentence = "Merhaba Cohort 08"
// function countWords(sentence) {

//     const result = sentence.split(" ").length
//     return result
// }

// console.log(countWords(sentence));



//? Bu cümleyi alip tersine cevirerek büyük harflerin olusan yeni bir cümle yapan fonksiyon

// const sentence2 = "Merhaba Cohort DE-08"
// function countWords2(sentence) {

//     const result = sentence.split(/\s+/).reverse().join(" ").toUpperCase()
//     return result
// }

// console.log(countWords2(sentence2));


//!Size bir  kelime verildi. "Clarusway" kelimesini bulmanız ve şuna benzer bir cümle döndürmeniz gerekir:

//? "[Clarusway'i bulduğunuz kelimenin sırası] 'nda Clarusway'i buldum!"

//? Clarusway'i bulamıyorsanız, "I can't find Clarusway :(" yazın.

//? findClarusway("I am finding Clarusway !") ➞ "I found Clarusway at 4!"

// const newSentence = "I like Clarusway"

// const findWord = (sentence) => {
//     if (sentence.includes("Clarusway")) {
//         return `I found Clarusway at ${sentence.split(" ").indexOf("Clarusway") + 1} `;
//     } else {
//         return "I can't find Clarusway :(";

//     }

// }
// console.log(findWord(newSentence));

//! Bir öğe dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan program

// removeDuplicated = ([1, 0, 1, 0, 1]) // Output [1,0]
// removeDuplicated2 = (["the", "small", "cat", "the", "cat"]) // ouput["the","small","cat"]


// function removeDuplicated(arr) {
//     const duplicatedArray = []
//     for (let i of arr) {
//         if (!duplicatedArray.includes(i)) {
//             duplicatedArray.push(i)
//         }
//     }
//     return duplicatedArray
// }

// console.log(removeDuplicated([1, 0, 1, 0, 1]));
// console.log(removeDuplicated(["the", "small", "cat", "the", "cat"])) // ouput["the","small","cat"]




// function removeDuplicates(arr) {
//     let unique = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (unique.indexOf(arr[i]) === -1) {
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }

// console.log(removeDuplicates(removeDuplicated));
// console.log(removeDuplicates(removeDuplicated2));

//? Bir dizi içindeki sayıları asal olanlarını filtreleyen bir  fonksiyonu oluşturun.(filter ile yapılması önerilen)


// function filteredPrimeNumber(numberArr) {
//     return numberArr.filter((element) => {
//         return isPrime(element);
//     });
// }

// console.log(filteredPrimeNumber([1, 2, 3, 4, 5, 6, 7, 8]));
// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.trunc(num * 0.5); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }


//!Bir dizide ilk harfi A ile başlayan elemanları yeni bir diziye alan fonksiyon 

const words = ["Apple", "Banana", "Orange", "Avocado", "Grape", "Apricot"];

const aWords = function (upperWords) {
    return upperWords.filter((word) => word.startsWith('A'))
}
console.log(aWords(words));