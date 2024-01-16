//! ************STRING METHODS ************
// String metodları () kullanılır. 
//? Chaining yani zincirleme olarak birden fazla metod birlikte kullanılabilir.
//! -------------------------------------------------------------------------- */
// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
//! endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
//! includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
//! replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
//! split()	            Splits a string into an array of substrings.
//! startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.



// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRING METHODS******");

//! 1- Klasik yöntemle tanimlanan String ilkel (primitive) dir.

const str1 = "clarusway"
const str2 = "hello"
const str3 = "all the world"
console.log(str1 + str2, typeof (str1 + str2));

//! 2- String constructor ile tanimlanan String non-primitive (ilkel olmayan) dir.

const str4 = new String("yeni bir String")
console.log(typeof str4);


//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods

//* -------------------------------------------------------------------------- */
//*                         STRING YAPISI VE INDEXLEME                         */
//* -------------------------------------------------------------------------- */

let course = "clarusway"
console.log(course[0]);
console.log(course[4]);
console.log(course[course.length - 1]);

// Stringler,primitive bir tür olduğu için parça olarak değiştiremezsiniz
// immutable - not mutable
course = "full stack"
console.log(course);


// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================

const s1 = "hello"
const s2 = "world"
const s3 = s1.concat(' all the ' + s2)
console.log(s3);
//! Orjinal degeri degistirmez, assigning ile kalici degistirilebilir.

// *=========================================================
// *   toLowerCase() toUpperCase() immutable=değiştirmez
// *=========================================================

const myName = "Ashley Miller"
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName.toLocaleUpperCase('tr'));

//! toLocaleUpperCase("tr") = Türkce olarak kelimeyi büyüt anlamina gelir.


//^ EXAMPLE - 1

//? ORNEK: iki string'i esit veya degil diye kiyaslayarak sonucu donduren fonksiyonu yaziniz.

const isEqual = (str1, str2) => str1 == str2.toLocaleUpperCase("tr") ? "eşittir" : "eşit değildir"

console.log(isEqual("İSMET", "ismet"));
console.log(isEqual("ISMET", "ismet"));


// *=========================================================
// *   charAt()
// *=========================================================

const s4 = `primitive 
veri tiplerinin property ya da metodu olmaz.`

console.log(s4.charAt(s4.length - 1));



// *=========================================================
// !   includes()- case sensitive (büyük küçük harfe duyarlı)
// *=========================================================

const word = "to be or not to be, that is The questions"
console.log(word.includes("the")); // false
console.log(word.includes("The")); // true
console.log(word.includes("quest")); // true
console.log(word.includes(" ")); // true
console.log(word.includes("to be", 14)); // false


// *=========================================================
// *   indexOf()- case sensitive (büyük küçük harfe duyarlı)
// *=========================================================

const word1 = "to be or not to be, that is The questions"

console.log(word1.indexOf("be")); // 3
console.log(word1.lastIndexOf("be")); // 16
console.log(word1.indexOf("the")); // olmayan karakter icin her zaman -1 döndürür

console.log(word1.indexOf("be", 5)); // 16

console.log(word1.indexOf("be", word1.indexOf("be") + 1)); // 16


// *=========================================================
// *   search()  
// *=========================================================

const word2 = "to be or not to be, that is The 1 questions"

//! REGEX - REGULAR EXPRESSION

console.log(word2.search(/[A-Z]/)); // 28 ilk büyük harfi buldu ve index'ini döndürdü.
console.log(word2.search(/[a-z]/)); // 0 ilk kücük harfi buldu ve index'ini döndürdü.
console.log(word2.search(/[0-9]/)); // 32 ilk rakami buldu ve index'ini döndürdü.
console.log(word2.search(/[.]/)); // -1
console.log(word2.indexOf("."));  // -1
console.log(word2.search(/[^a-z]/)); // 2
console.log(word2.search(/[^0-9a-zA-Z]/)); // rakam, kücük harf ve büyük harf disindaki ilk karakteri döndür

console.log(word2.toUpperCase().search(/[aeıioöuü]/i)); // i = incase sensitive, büyük kücük harfi önemseme

//* ----------------------------------------------------------
//! startsWith(), endsWith() -- case sensitive
//* ----------------------------------------------------------

const word3 = "Salina salina  sinsice olurum sana!"

console.log(word3.startsWith("sa")); // false (cümle büyük "Sa" ile basliyor)
console.log(word3.startsWith("Sa")); // true (cümle büyük "Sa" ile basliyor)

console.log(word3.endsWith("!")); // true (cümle "!" ile bitiyor)

console.log(word3.startsWith("salina", 7)); // true (7. karakter "salina" oldugu icin true döndürür)

console.log(word3.endsWith("salina", 13)); // true (13. karaktere kadar gel ama 13 dahil degil)


//* ----------------------------------------------------------
//!  replace(searchFor, replaceWith) --immutable (değiştirmez)
//* ----------------------------------------------------------

let oku = "Oku Johny gibi saf olma saf olma saf olma"

oku = oku.replace("saf olma", "basarili ol")
console.log(oku);

console.log(oku.replace(/SAF/i, "fakir"));

//* /SAF/i sekinde yazim incase sensitive (büyük kücük harfe takilma)

console.log(oku.replace(/Saf olma/gi, "zengin ol"));

//^ gi ile yazilirsa hem bütün saf olmalari secer, hem de incase sensitive'dir

//? ReplaceAll()

let oku2 = "Oku Johny gibi SAF olma saf olma saf olma"

console.log(oku2.replaceAll("saf olma", "akilli ol"));


//* ----------------------------------------------------------
//!  slice(beginIndex, endIndex)
//*  substring(beginIndex, endIndex)
//* ----------------------------------------------------------
//^ slice() ve substring() metodu ayni islevi görür fakat "substringlerde '-' index calismaz"

const veysel = "UZUN INCE BIR YOLDAYIM YURUYORUM GUNDUZ GECE"


console.log(veysel.slice(10)); // BIR YOLDAYIM YURUYORUM GUNDUZ GECE
console.log(veysel.slice(17, 22)); // DAYIM (22 dahil degil)
console.log(veysel.substring(17, 22)); // DAYIM

console.log(veysel.slice(-11)); // GUNDUZ GECE (tersten saymaya 1. indexten baslar)
console.log(veysel.slice(-11, -5)); // GUNDUZ (-11 dahil -5 dahil degildir.)

console.log(veysel.substring(veysel.length - 4, veysel.length - 2));



//* ----------------------------------------------------------
//! split= string i diziye çevirir
//! split(seperator , limit ) =>ikisi de optional
// //* split("x")=>x lerden ayırır, virgül+boşluk yapar ve yeni dizi döndürür.orjinal diziyi değiştirmez
//* ----------------------------------------------------------

const tarkan = "Gel gündüzle gece olalim"

console.log(tarkan.split()); // 1 elemanli diziye cevirir
console.log(tarkan.split(" ")); // bosluklardan virgül ile ayirilmis dört elemanli dizi
console.log(tarkan.split(""));
console.log(tarkan.split("e")); // e harflerinden virgül ile ayiran durum
console.log(tarkan.split("e", 3)); // dizinin 3 elemanini al

console.log(tarkan);


let months =
    "Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec";

console.log(months.split("/"));


let date = "16.01.2024"
console.log(date.split("."));

console.log(`bugün ayin ${date.split(".")[0]} si`);

//? Alttaki stringi diziye cevir ve ilk 3 elemanini al
let liste = "Harry Trump; Fred Barney; Helen Rigby; Bill Abel; Chris Hand";

console.log(liste.split(";", 3));

let yeniListe = liste.split(";")

console.log(yeniListe);

//! join() ile tekrar dziyi stringe ceviriyoruz

console.log(yeniListe.join()); // defaulta virgül ile stringe cevirir
console.log(yeniListe.join(" -"));

//! reverse (metodu ile bir diziyi tersten yazdirabiliriz.)

let pol = "ey edip adanada pide ye"
let ters = pol.split("").reverse().join("")
console.log(ters);


if (pol == ters) {
    console.log("Bu bir polindrom cümledir");
} else {
    console.log("selam cümlesi polindrom degildir");
}


