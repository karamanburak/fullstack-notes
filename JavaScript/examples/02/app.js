

// let myNum = 3
// square(myNum)
// function square(num) {
//     console.log(num ** 2);
//     let myNum = num ** 2
//     console.log('Fonksiyonun ici :', myNum);

// }

// console.log(myNum);



// let sum = function (num1, num2) {
//     return num1 + num2
// }

// console.log(sum(3, 5));


// let multiply = (num1, num2) => {
//     console.log(num1 * num2);
// }

// multiply(sum(3, 5), sum(2, 3))


// let num3 = 8
// let divide = num => {
//     console.log(num / 2);
// }

// divide(num3)

//^ EXAMPLE - 1 
//? Ücgenin kenar ölcülerini alacak, Eskenar, Ikizkenar, Cesitkenar

// function ucgenTipi(a, b, c) {
//     if (a == b && a == c) {
//         return "Eşkenar ücgen"
//     } else if ((a == b) || (a == c) || (b == c)) {
//         let response = "Ikizkenar ucgen"
//         return response
//     }
//     else {
//         return "Ceşitkenar ücgen"
//     }

// }

// console.log(ucgenTipi(4, 4, 4)); // eskenar
// console.log(ucgenTipi(4, 4, 8));// ikizkenar
// console.log(ucgenTipi(4, 6, 8)); // cesitkenar


//^ EXAMPLE -2 
//? Saat dakika ve saniye parametreleri alip toplam saniyeyi döndür.



// function convertToSeconds(hour, minute, second) {
//     let sumSeconds = (hour * 3600) + (minute * 60) + second
//     return sumSeconds


// }

// console.log(convertToSeconds(3, 50, 41));


// let convertToSeconds = (hour, minute, second) => {
//     let sumSeconds = (hour * 3600) + (minute * 60) + second
//     return sumSeconds

// }
// console.log(convertToSeconds(1, 10, 100));




function returnNegative(num) {

    if (num <= 0) return num;
    return -num


}

console.log(returnNegative(-1)) //-1
console.log(returnNegative(5)) // -5
console.log(returnNegative(0)) // 0

