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