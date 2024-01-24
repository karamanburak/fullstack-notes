//* -------------------------------------------------------------------------- */
//*   1                            LONGEST WORD                                */
//* -------------------------------------------------------------------------- */

// function longestWord(str) {
//     let words = str.split(" ")
//     let longestWord = ""


//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word
//         }
//     }


//     return longestWord
// }

// console.log(longestWord("I woke up early today"));
// console.log(longestWord("I went straight to the beach"));


//* -------------------------------------------------------------------------- */
//*   2                           MATH SEQUENCES                               */
//* -------------------------------------------------------------------------- */

// function mathSequences(arr) {
//     let arith = new Set()
//     let geo = new Set()

//     for (let i = 1; i < arr.length; i++) {
//         let num1 = arr[i] - arr[i - 1]
//         arith.add(num1)
//         let num2 = arr[i] / arr[i - 1]
//         geo.add(num2)
//     }

//     if (arith.size === 1) {
//         return "Arithmetic"
//     }
//     if (geo.size === 1) {
//         return "Geometric"
//     }
//     return -1
// }

// console.log(mathSequences([10, 20, 30, 40]));
// "Arithmetic"
// console.log(mathSequences([2, 4, 8, 16]));
// "Geometric"
// console.log(mathSequences([2, 5, 14, 89]));
// -1


//* -------------------------------------------------------------------------- */
//*   3                       CAPITALIZE FIRST LETTER                          */
//* -------------------------------------------------------------------------- */


//^ VERSION 1
// function capitalizeWords(str) {
//     let words = str.split(" ").map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1)
//     })
//     return words.join(" ")
// }

// console.log(capitalizeWords("I got up early today"));
// console.log(capitalizeWords("I walked straight to the beach"));


//^ VERSION 2

// function capitalizeWords(str) {
//     let words = str.split(" ").map(word => {
//         let firstLetter = word.slice(0, 1)
//         let rest = word.slice(1)
//         firstLetter = firstLetter.toUpperCase()

//         return `${firstLetter}${rest}`
//     })

//     return words.join(" ")
// }


// console.log(capitalizeWords("I got up early today"));
// console.log(capitalizeWords("I walked straight to the beach"));


//* -------------------------------------------------------------------------- */
//*   4                            UNIQUE VALUES                               */
//* -------------------------------------------------------------------------- */

//? Return true only if all values are unique, otherweise false
//? Using Array, Object, string method lastIndexOf()
//? no Set Data Structure



//^ VERSION 1
// function unique(str) {
//     let values = []
//     for (let letter of str) {
//         if (!values.indexOf(letter)) {
//             return false
//         }
//         values.push(letter)
//     }

//     return true
// }

// console.log(unique("abcde"));
// true
// console.log(unique("abacdefb"));
// false

//^ VERSION 2

// function unique(str) {

//     let values = {}
//     for (let letter of str) {
//         if (values[letter]) {

//             return false
//         }
//         values[letter] = "exists"
//     }

//     return true

// }


// console.log(unique("abcde"));
// true
// console.log(unique("abacdefb"));
// false


//^ VERSION 3

// function unique(str) {

//     for (let i = 0; i < str.length; i++) {
//         if (str.lastIndexOf(str[i]) !== i) {

//             return false
//         }
//     }

//     return true
// }

// console.log(unique("abcde"));
// true
// console.log(unique("abacdefb"));
// false


//* -------------------------------------------------------------------------- */
//*   5                              ARRAY SUM                                 */
//* -------------------------------------------------------------------------- */
//? Verilen sayilari toplami en büyük sayi ile esitle.

//^ VERSION 1 (forEach)

// function arraySum(arr) {
//     let sum = 0;
//     let max = 0;
//     arr.forEach((num) => {
//         if (max < num) {
//             max = num;
//         }
//         sum += num;
//     })
//     return sum - max;
// }



//^ VERSION 2
function arraySum(arr) {

    let tempArr = arr.sort((a, b) => {
        return a - b
    })

    let largest = tempArr.pop()
    let number = 0
    tempArr.forEach(item => number += item)
    return largest === number
}




//^ VERSION true-false

// const arraySum = arr => {
//     let result = 0;
//     for (const num of arr) {
//         result += num;
//     }
//     return result - Math.max(...arr) === Math.max(...arr)
// }

console.log(arraySum([1, 2, 4, 6, 13]));
// true 1+2+4+6=13
console.log(arraySum([1, 2, 4, 34, 22]));
// false 1+2+4+22 = 29 29!= 34


//* -------------------------------------------------------------------------- */
//*   6                    UNIQUE OBJECT PROPERTY VALUES                       */
//* -------------------------------------------------------------------------- */

let products = [
    {
        title: "Iphone 15",
        company: "apple",
    },
    {
        title: "Galaxy",
        company: "samsung",
    },
    {
        title: "Iphone 14",
        company: "apple"
    },
    {
        title: "Macbook Pro",
        company: "apple"
    },
    {
        title: "Playstation",
        company: "sony"
    }
]


//^ VERSION 1 (map)
function getUnique(arr) {
    let tempArr = arr.map((item) => item.company)
    return [...new Set(tempArr)]
    // return tempArr
}

console.log(getUnique(products));


//^ VERSION 2
// function getUnique(arr) {
//     return [...arr.reduce((acc, curr) => {
//         acc.add(curr.company)
//         return acc
//     }, new Set())]
// }

// console.log(getUnique(products));


//* -------------------------------------------------------------------------- */
//*   7                          COUNTING LETTERS                              */
//* -------------------------------------------------------------------------- */

//? return first word with greatest number of repeated letters

//^ VERSION 1
function countLetters(str) {

    let tempArr = str.split(" ")
    tempArr = tempArr.map((item) => {
        let tempItem = item.toLowerCase().split("")
        return tempItem.reduce((acc, curr) => {
            acc[curr] = acc[curr] ? acc[curr] + 1 : 1
            if (acc[curr] > acc.max) {
                acc.max = acc[curr]
            }
            return acc
        },
            { max: 1, word: item }
        )
    })
    let amount = 1
    let word = ""
    for (let item of tempArr) {
        if (item.max > amount) {
            amount = item.max
            word = item.word
        }
    }
    if (amount > 1) {
        return word
    }

    return -1
}

console.log(countLetters("Javascript is the greatest programming language"));

//^ VERSION 2
// const countLetters = (str) => {
//     let words = str.split(' ');
//     let mostDupes = 0;
//     let longWords = [];
//     for (let word of words) {
//         let currentDupes = word.length - new Set(word.toLowerCase()).size;
//         if (currentDupes > mostDupes) {
//             mostDupes = currentDupes;
//             longWords.push(word);
//         }
//     }
//     return longWords[longWords.length - 1];
// };
// console.log(countLetters("Javascript is the greatest programming language"));
