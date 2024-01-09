//? : Tahmin Oyunu
//* Program 1*20 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer 5 hak içinde bildi ise "Tebrikler  bildiniz" yazacaktır.

let devam;
do {
    const rastgele = Math.ceil(Math.random() * 20)
    console.log(rastgele);

    let hak = 5;
    while (hak > 0) {

        const guess = +prompt("Lütfen 0-20 arasinda bir sayi tahmin ediniz.")

        hak--

        if (rastgele == guess) {
            console.log("Tebrikler bildiniz🏆");
            break; // Tahmin dogruysa hakkim varsa bile döngü kirilsin diye!!!
        } else if (rastgele > guess) {
            console.log("ARTTIR 📈");
            console.log(hak, "hakkiniz kaldi");
        } else {
            console.log("AZALT 📉");
            console.log(hak, "hakkiniz kaldi");

        }

        if (hak == 0) {
            console.log(`Üzgünüz hakkiniz kalmadi, bilgisayarin tuttugu sayi : ${rastgele}`);
        }
    }

    devam = prompt("devam etmek istiyorsaniz e/E giriniz!")


} while (devam.toUpperCase() == "E");
console.log(`Döngüden ciktik`);