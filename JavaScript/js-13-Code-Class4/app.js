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

// const words = ["Apple", "Banana", "Orange", "Avocado", "Grape", "Apricot"];

// const aWords = function (upperWords) {
//     return upperWords.filter((word) => word.startsWith('A'))
// }
// console.log(aWords(words));


// //? Bir diziyi tersine çeviren bir map fonksiyonu oluşturun.

// const arr = ["Heute", "ist", "Montag"]

// let result = arr.map((element, index) => arr[arr.length - index - 1])

// console.log(result)


//! bir dizide verilen  maaşlara %10 zam yapılacak ama hala 20000 altında kalanlara ek ödeme planlanacak
//? a- Kaç kişi zam olsa bile 20000 altında kalıyor

// let salaries = [18000, 13000, 17000, 24000, 18500, 21000, 19300];
// const under20k = salaries.filter((salary) => salary * 1.1 < 20000)
// console.log(under20k.length);

// //? b- Maaşı zamlı halde 20000in altında kalanlara patronumuz belki bir güzellik yapar. 20000 altında kalanları 20000'e tamamlayabilir ama ne kadar bütçe ayırmalı

// let addBudget = salaries.map((salary) => {
//     let increased = salary * 1.1
//     return increased < 20000 ? 20000 - increased : 0
// }).reduce((sum, payment) => sum + payment, 0)

// console.log(addBudget);

// EXTRA QUESTIONS

//!1-Bu şekilde giirlen stringi "altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"
//! 612453789   bu hale dönüştüren program


const str = "alti,bir,iki,dört,bes,üc,yedi,sekiz,dokuz"
console.log(str);
let stringNumber = []

const splitToNumber = (string) => {
    let newString = string.split(",")
    console.log(newString);

    for (let i = 0; i <= newString.length - 1; i++) {

        if (newString[i] === "bir") stringNumber.push(1)
        else if (newString[i] === "iki") stringNumber.push(2)
        else if (newString[i] === "üc") stringNumber.push(3)
        else if (newString[i] === "dört") stringNumber.push(4)
        else if (newString[i] === "bes") stringNumber.push(5)
        else if (newString[i] === "alti") stringNumber.push(6)
        else if (newString[i] === "yedi") stringNumber.push(7)
        else if (newString[i] === "sekiz") stringNumber.push(8)
        else if (newString[i] === "dokuz") stringNumber.push(9)
        else newString[i] = 0
    }
    return stringNumber.join("")


}

console.log(splitToNumber(str));


//!2-Bir dizi içindeki sayıları asal olanlarını filtreleyen bir  fonksiyonu oluşturun.(filter ile yapılması önerilen)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//^ Asal sayilari filter fonksiyonu ile bulma


let asalNum = nums.filter(num => {
    if (num < 2) {
        return false // 2'den kücük sayilar asal degildir.
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false // Tam bölünebilen sayilar asal degildir.
        }
    }
    return true // geri kalan sayilar asaldir.
})


console.log(asalNum);



//!3-Bir diziyi tersine çeviren bir map fonksiyonu oluşturun.

const originalArr = [1, 2, 3, 4, 5]

const reversedArr = originalArr.map((value, index, array) => array[array.length - 1 - index])
console.log(reversedArr);

//!4 -verilen sayıyı yazıya çeviren program

function sayiyiYaziyaCevir(sayi) {
    const birler = ["", "bir", "iki", "üç", "dört", "beş", "alti", "yedi", "sekiz", "dokuz"]
    const onlar = ["", "on", "yirmi", "otuz", "kirk", "elli", "altmis", "yetmis", "seksen", "doksan"]

    let yazi = ""

    // Yüzler basamagi

    if (sayi >= 100) {
        yazi += birler[Math.floor(sayi / 100)] + "yüz"
        sayi %= 100
    }

    // onlar basamagi
    if (sayi >= 10) {
        yazi += onlar[Math.floor(sayi / 10)]
        sayi %= 10
    }

    // Birler basamagi
    if (sayi > 0) {
        yazi += birler[sayi]
    }
    return yazi
}

//Ornek kullanim

let sayi = 354
let yaziKarsilik = sayiyiYaziyaCevir(sayi)
console.log(yaziKarsilik) //ucyuzellidort