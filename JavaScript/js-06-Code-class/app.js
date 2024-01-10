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

// let age2

// do {
//     age2 = +prompt("Enter a valid Number!")
// } while (isNaN(age2));
// console.log(age2);

//? Kullanıcı adı ve parola kontrolü yap. Doğru ise ismiyle karşıla değilse tekrar girmesi için yönlendir. 3 kez yanlış giriş olursa çıkış yapsın

// let user = "burak";
// let password = "1234";

// let loginCount = 3;

// while (loginCount > 0) {
//     let userid = prompt("Kullanıcı adınızı girin:");
//     let userpw = prompt("Parolanızı girin:");

//     if (userid === user && userpw === password) {
//         alert(`Merhaba, ${userid}! Sayfamıza hoşgeldiniz.🎉`);
//         break;
//     } else {
//         loginCount--;
//         if (loginCount > 0) {
//             alert(`Kullanıcı adı veya parola yanlış girdiniz. Kalan giriş hakkı: ${loginCount}`);
//         } else {
//             alert("Giriş hakkınız kalmadı.Güle güle..");
//         }
//     }
// }


//!  Aşağıdaki çıktıyı konsola yazdırınız

//     * * * * *
//     * * * * *
//     * * * * *
//     * * * * *
//     * * * * *

// for (let i = 0; i < 5; i++) {
//     let satir = '';
//     for (let j = 0; j < 5; j++) {
//         satir += '* '

//     }
//     console.log(`${satir}`)


// }

//!  Aşağıdaki çıktıyı konsola yazdırınız

//     *
//     * *
//     * * *
//     * * * *
//     * * * * *


// for (let i = 0; i < 1; i++) {
//     let satir = '';
//     for (let j = 0; j < 5; j++) {
//         satir += '* '

//         console.log(`${satir}`)
//     }

// }

// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 0; j < i; j++) {
//         row += '* '

//     }
//     console.log(`${row}`)

// }


// let size = 5;
// let output = "";
// for (let i = 0; i < size; i++) {
//     let row = "";
//     for (let s = 0; s < size - i - 1; s++) {
//         row += " ";
//     }
//     for (let j = 1; j <= 2 * i + 1; j++) {
//         output += "#";
//     }
//     console.log(row + output);
//     output = "";
// }

//? kullanicidan alinan 5 adet sayinin ortalamasini konsola yazdiriniz!

/* let sum = 0;
for (var i = 1; i <= 5; i++) {
    let sayi = +prompt(i + ". sayiyi girin:");
    sum += sayi;
}
// console.log("Ortalama: " + sum / 5);
console.log(`Ortalama :  ${sum / 5}`);
 */
// while ile

/* let sum = 0;
let sayac = 0;

while(sayac < 5){
    let sayi = +prompt(sayac+1 + ". sayiyi girin:");
    sum += sayi;
    sayac++
}
console.log(`Ortalama :  ${sum / sayac}`); */

// 1000 ile 2000 arasındaki hem 3 hem 5 e bölünebilen sayıları konsola yazdıran çözüm

/* let sayac = 0

for(let num = 1000; num <= 2000; num++) {
    if(num % 15 == 0 && num % 5 == 0) {
        // console.log(num);
        sayac++
    }
}
console.log(sayac) */

//while

/* let sayi = 1000

while (sayi <= 2000) {
    if(sayi % 3 == 0 && sayi % 5 == 0) {
        console.log(sayi);
    }
    sayi++
    
} */

