//* Pc'ye sayi tutturuldu. 1 ile 20 arasinda olabilmesi icin 20 ile carpip Math.ceil ile yukari yuvarlandi.

let randomNumberPc = Math.ceil(Math.random() * 20)

let message = document.querySelector(".msg")

let score = 10
let topScore = 0

//! her check butonuna basinca olacaklar

document.querySelector(".check").addEventListener("click", () => {


    const guess = document.querySelector(".guess").value

    //? Tahmin girilmeden basailmasin
    if (!guess) {

        message.textContent = "Please enter a valid estimate"
    } else if (guess == randomNumberPc) {
        //? Tahmin dogruysa
        message.textContent = "Congratulations you got it! 🏆"
        document.querySelector("body").style.backgroundColor = "green"
        document.querySelector(".number").textContent = randomNumberPc

        //? En yüksek skoru tahmin et

        if (score > topScore) {
            topScore = score
            document.querySelector(".top-score").textContent = topScore
        }

    } else {
        //? Tahmin yanlissa
        //? Skor 1 den asagi düsmemeli

        if (score > 1) {
            score--
            document.querySelector(".score").textContent = score

            guess < randomNumberPc
                ? (message.textContent = "Increase 📈")
                : (message.textContent = "Decrease 📉")

        } else {
            message.textContent = "You have lost the game, please try again 😭"

            document.querySelector(".score").textContent = 0
            document.querySelector("body").style.backgroundColor = "red"


        }
    }

})

//! Again tusuna basinca olacaklar (baslangic degerlerine dönülsün, background #2d3436-olsun)

document.querySelector(".again").onclick = () => {

    randomNumberPc = Math.ceil(Math.random() * 20)
    console.log(randomNumberPc);


    message.textContent = "The game is starting for the new player"

    document.querySelector("body").style.backgroundColor = "#2d3436"

    document.querySelector(".number").textContent = "?"

    document.querySelector(".guess").value = ""


    //? Js deki kullanilan azaltilan skor yeni oyuncu icin 10 olsun.
    score = 10 //Bunu yazmazsak sonraki oyuncu, önceki oyuncudan kalan hakla devam eder.
    document.querySelector(".score").textContent = 10

}