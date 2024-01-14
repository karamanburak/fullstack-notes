// Function Declaration


// function areAnagrams(word1, word2) {
//     let a = word1.toLowerCase().split('').sort().join('')
//     let b = word2.toLowerCase().split('').sort().join('')

//     return a === b ? true : false
// }

// Expected Outcome: True
// console.log(areAnagrams("listen", "silent"));
// console.log(areAnagrams("triangle", "integral"));

// Expected Outcome: False
// console.log(areAnagrams("hello", "world"));
// console.log(areAnagrams("apple", "banana"));








// Function Expression

// const areAnagrams = function (word1, word2) {

//     let a = word1.toLowerCase().split('').sort().join('')
//     let b = word2.toLowerCase().split('').sort().join('')

//     return a === b ? true : false


// }

// Expected Outcome: True
// console.log(areAnagrams("listen", "silent"));
// console.log(areAnagrams("triangle", "integral"));

// Expected Outcome: False
// console.log(areAnagrams("hello", "world"));
// console.log(areAnagrams("apple", "banana"));


//Function Arrow

const areAnagrams = (word1, word2) => {
    let a = word1.toLowerCase().split('').sort().join('')
    let b = word2.toLowerCase().split('').sort().join('')

    return a === b ? true : false

}

// Output Expected: True
console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("triangle", "integral"));

// Output Expected: False
console.log(areAnagrams("hello", "world"));
console.log(areAnagrams("apple", "banana"));