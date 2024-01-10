//^ And Operatorü

// //& Truthy value with &&
// console.log(2 && 5); // 5

// console.log(Boolean(2));

// //& Falsy value with &&
// console.log(0 && 7); // 0
// console.log('0' && 7); // 7
// console.log(Boolean(0));

// //& object / Array with &&

// console.log({} && "Hello");
// console.log([] && "Hello");

// console.log(Boolean([])); // true
// console.log(Boolean({})); // true

// //& Falsy string with &&

// console.log('' && 'World'); // ilk deger bos string döner
// console.log("" && 'World'); // ilk deger bos string döner
// console.log(`` && 'World'); // ilk deger bos string döner


// //& Falsy null with &&

// console.log(null && 'Hello World'); // null
// console.log(NaN && 'Hello World'); // NaN
// console.log(null && NaN); // null



// //^ Or Operatorü

// //& Truthy value with ||

// console.log(2 || 5); // 2

// //& Falsy value with ||

// console.log(0 || 7); // 7
// console.log(0 || ''); // bos string döner


// //& object / Array with ||
// console.log({} || "Hello"); // {}
// console.log([] || "Hello"); // []

// //& Falsy null with ||

// console.log(null || 1); // 1
// console.log(NaN || null); // null

//? 18 yaşından büyüklerin alkol kullanabileceği 18 yaşından küçüklerin alkol kullanamayacağını if else yapısı ile konsola yazdıran kodu yazınız.
//^ if-else

// const age = +prompt("Lütfen yasinizi giriniz!")

// if (age >= 18) {
//     console.log("Alkol tüketebilirsiniz");
// } else {
//     console.log("Lütfen 18 yasini bekleyiniz!");
// }

//^ ternary

// const age = +prompt("Lütfen yasinizi giriniz!")

// let result = (age >= 18) ? "Alkol tüketebilirsiniz!" : "Lütfen 18 yasini bekleyiniz!"
// console.log(result);


//? kullanıcının sayı girene kadar tekrar giriş yapmasını sağlayan while yapısını yazın.
//^ while

// let age = +prompt("Please enter a number!");

// while (isNaN(age) || age == '') {
//     age = +prompt("Please enter a valid number!");

// }
// console.log("Your number is :", age);


//^ do-while

let age2

do {
    age2 = +prompt("Enter a valid Number!")
} while (isNaN(age2));
console.log(age2);
