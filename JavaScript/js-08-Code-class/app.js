
let num1 = +prompt("Lütfen bir sayi giriniz")
let num2 = +prompt("Kacinci sayiya kadar carpim tablosu verilsin")
const printMultiplicationTable = (num1, n) => {

    for (let i = 1; i <= n; i++) {
        sum = console.log(`${num1} * ${i} = ${num1 * i}`);

    }
    return sum
}

printMultiplicationTable(num1, num2);


const myFunc = (num1, num2) => {
    return num1 % num2 ? false : true
}

const isDivide = myFunc(252, num2)
console.log(isDivide);
