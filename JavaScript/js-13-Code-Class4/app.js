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
include(deger): iceriyor mu? (true - false)
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
const numbers = [34, 56, 56, 87, 90]
let toplam = 0
const ortalama = () => {

    for (let i = 0; i < numbers.length; i++)
        toplam += numbers[i]

    return toplam

}

console.log(ortalama() / numbers.length);

//^ reduce ile 
function avarage(array) {

    let valid = array.filter((num) => num === typeof "number" && !isNaN(num))

    if (valid.length > 0) {

        let toplam = array.reduce((a, b) => a + b, 0);
    }
    return toplam / array.length;
}

const array = [34, 56, 56, 87, 90]
console.log(avarage(array));

//?  Girilen bir cümledeki kelime sayisini bulan fonksiyon

const sentence = "Merhaba Cohort 08"
function countWords(sentence) {

    const result = sentence.split(" ").length
    return result
}

console.log(countWords(sentence));



//? Bu cümleyi alip tersine cevirerek büyük harflerin olusan yeni bir cümle yapan fonksiyon

const sentence2 = "Merhaba Cohort DE-08"
function countWords2(sentence) {

    const result = sentence.split(/\s+/).reverse().join(" ").toUpperCase()
    return result
}

console.log(countWords2(sentence));