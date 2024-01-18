// 1- "Elma,Armut,Muz,Cilek" elemanlarina sahip bir dizi olusturunuz.

let meyveler = ['Elma', 'Armut', 'Muz', 'Cilek']

// 2- Diz kac elemanlidir?

console.log(meyveler.length);

// 3- Dizinin ilk ve son elemanlari nelerdir?

console.log(meyveler[0]); // Elma 
console.log(meyveler[meyveler.length - 1]) // Cilek

// 4- Elma dizinin bir elemani midir?

console.log(meyveler.includes('Elma')) // true
console.log(meyveler.indexOf('Elma')) // 0

// 5- Kiraz meyvesini listenin sonuna ekleyiniz

// meyveler[meyveler.length] = 'Kiraz'
meyveler.push('Kiraz')
console.log(meyveler);

// 6- Dizinin son 2 elemanini siliniz

// meyveler.pop()
// meyveler.pop()
// meyveler.splice(3, 5)
meyveler.splice(meyveler.length - 2, 2)
console.log(meyveler);

// 7- Asagidaki bilgileri dizi icerisinde saklayiniz ve her ögrencinin yasini ve not ortalamasini hesaplayiniz.

/* 
    Ögrenci 1:  Elmas Senol Karaman  2010 (70,60,80)
    Ögrenci 2:  Ada Karaman 2012 (80,80,90)
    Ögrenci 3:  Burak Karaman 2009 (60,60,70)
*/

let ogr1 = [
    'Elmas',
    'Senol Karaman',
    2010,
    [70, 80, 90]
]
let ogr2 = [
    'Ada',
    'Karaman',
    2012,
    [80, 80, 90]
]
let ogr3 = [
    'YigBurakit',
    'Karaman',
    2009,
    [60, 60, 70]
]

let ogrenciler = [ogr1, ogr2, ogr3]

let elmasYas = new Date().getFullYear() - ogrenciler[0][2]
let adaYas = new Date().getFullYear() - ogrenciler[1][2]
let burakYas = new Date().getFullYear() - ogrenciler[2][2]

let elmasNot = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3
let adaNot = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3
let burakNot = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3


console.log(elmasNot.toFixed(1), adaNot.toFixed(1), burakNot.toFixed(1));
console.log(elmasYas, adaYas, burakYas);