/* ---------------------------------- */
/*      VÜCUT KITLE INDEKSI (BMI)     */
/* ---------------------------------- */
const a = prompt("Enter your kilograms!")
const b = prompt("Enter your height!")
const bmi = a / (b * b) * 10000
console.log((bmi));

if (bmi >= 0 && bmi < 18.5) {
    result = "Low weight!"
} else if (bmi > 18.50 && bmi < 24.99) {
    result = "Normal weight!"
} else if (bmi > 25.0 && bmi < 29.99) {
    result = "Heigh weight!"
} else if (bmi >= 30) {
    result = "Obesity!"
} else {
    result = "You have to enter a valid value!"
}

console.log(`Result is : ${result}`);
console.log(alert(`Result is : ${result}`));