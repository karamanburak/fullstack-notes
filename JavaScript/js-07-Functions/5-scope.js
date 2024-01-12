// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 4- SCOPE *************");


//^EXAMPLE - 1
//? Global Scope (Herkes tarafindan görülebilir.)


let first = 5
let second = 12
let third = 456

console.log(first, second, third);

const scopeFuntion = () => {

    first = 8

    // let ile yeni bir second oluştu ve dışarıdan erişilemez hale geldi
    let second = 45
    let fourth = 1234
    return fourth
    // return fourth yazılır. fonksiyon dışında bunu görmek için call yapılan yeri console.log da yazdırmalıyız
}

console.log(scopeFuntion());
console.log(first);
console.log(second);

//^ EXAMPLE - 2 
//! global degisken 

let number1 = 11;

const func1 = () => {

    let number1 = 44 //! function-scope

    number1++

    return number1

}

console.log(func1());

//? fonksiyondan gelen değer number1 değişkenine atandı
number1 = func1() //?global scope ama 45 olarak değişti

// const number1 = 56 //! Uncaught SyntaxError: Identifier 'number1' has already been declared


{
    number1++

    let x = 5;

    x++

    let y = x + 15

    console.log(y); //? blocked-scope 


}

console.log(number1);



//? VAR 

number2 = 100;

var number2; //? hoisted (en yukariya tasimis oluruz.)

var result = "Hallo"

if (number2 == 100) {

    let result = "Hi!" //? local(blocked)
    console.log(result);
} else {
    result = "Salute" //? global
    console.log(result);
}
console.log(result); //? global