//^ EXAMPLE - 1 
//? Taban ve yükseklik degerlerini parametre olarak alan ve bir ücgenin alanini hesaplayarak ana programa döndüren fonksiyonu yaziniz.

const ucgenAlan = function (yükseklik, taban) {

    let ucgenAlan = (yükseklik * taban) / 2
    return ucgenAlan

}

console.log(ucgenAlan(3, 5));



//^ EXAMPLE - 2
//? kareAl, küpAl, üsAl seklinde üc adet farkli arrow fonkisiyonu tanimlayin. Bu fonksiyonlarin ana programdan gereken parametreleri alarak sonuclari ana programa döndürmeleri gerekmektedir.

let sayi = +prompt("Lütfen islem yapmak istediginiz sayiyi giriniz!")

const kareAl = () => (sayi ** 2)
const küpAl = () => (sayi ** 3)
const üsAl = () => (sayi ** sayi)
console.log(kareAl())
console.log(küpAl())
console.log(üsAl())

//^ EXAMPLE - 3
// //? Yil degerini parametre olarak alan ve bu yilin artik yil olup olmadigini hesaplayarak sonucu ana programa döndüren fonksiyonu function-expression yöntemi ile yaziniz. NOT: Yil 4'e tam bölünüyorsa VE (100'e tam bölnmüyorsa VEYA 400'e tam bölünüyorsa) artik yildir aksi takdirde degildir.

const artikYil = function (yil) {
    yil = +prompt("Lütfen bir yil giriniz!");

    if (yil % 4 == 0 && yil % 100 != 0 || yil % 400 == 0)
        yil = `${yil} bir artik yildir`
    else
        yil = `${yil} bir artik yil degildir.`

    return yil
}

console.log(artikYil());



