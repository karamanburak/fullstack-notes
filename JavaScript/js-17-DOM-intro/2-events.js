
//? METHOD-1 (SADECE JAVASCRİPT TE YAZILAN YOL) 1.yol
//?---------------------------------------------------------------

//^ EXAMPLE -1 (onmouseover, onmouseout)

const js = document.querySelector("#js")
const body = document.querySelector("#body")


js.onmouseover = () => {
    body.style.backgroundColor = "cornflowerblue"

}

js.onmouseout = () => {
    body.style.backgroundColor = "red"
}

//^ EXAMPLE -2 (onclick-ondoubleclick)

const eins = document.querySelector(".eins")
const zwei = document.querySelector(".zwei")

zwei.onclick = () => {

    eins.src = "./img/logo2.png"
    zwei.src = "./img/js_logo.png"

}


zwei.onclick = () => {
    eins.src = "./img/js_logo.png"
    zwei.src = "./img/logo2.png"
}

zwei.ondblclick = () => {
    zwei.src = "./img/bir.jpeg"
}

//^ EXAMPLE -3

const button = document.querySelector("#btn")

button.onclick = () => {
    body.style.backgroundImage = "linear-gradient(to right, purple, gray)"

    document.querySelector("#par").style.fontSize = "40px"

    button.textContent = "Angeklickt"

}



// ? METHOD-2 (sadece JAVASCRIPT te yazılır- addEventListener())  2.yol
// ? ---------------------------------------------------------------

button.addEventListener("click", () => {
    const button = document.querySelector("#btn")

    button.onclick = () => {
        body.style.backgroundImage = "linear-gradient(to right, purple, gray)"

        document.querySelector("#par").style.fontSize = "40px"

        button.textContent = "Angeklickt"

    }
})

//^  EXAMPLE-4 (Mouse Over, Mouse Out )
//* -------------------------------------------------------


//?METHOD-3 (HTML-INLINE)
//?---------------------------------------------------------------

// inline js kodlari
// <h1 onmouseover="style.color='blue'" onmouseout="style.color='Yellow'">DOM in JAVASCRIPT</h1>

