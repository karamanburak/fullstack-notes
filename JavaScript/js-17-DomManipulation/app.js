document.querySelector("h1").style.color = "Cornflowerblue"
document.querySelector("h1").style.textAlign = "center"

let bild = document.querySelector(".bild")
let audio1 = document.querySelector(".audio1")

//! wenn die Schaltfläche "Suchen" angeklickt wird

document.querySelector(".telefonieren").onclick = () => {

    bild.src = "./img/img.gif"
    // Der Befehl play() führt den Tag audio in html in js aus.
    audio1.play()

    audio1.volume = 0.1


}


//! wenn die Schaltfläche "Verbinden" angeklickt wird


document.querySelector(".verbinden").onclick = () => {
    bild.src = "./img/telbagla.gif"
    // pause() Befehl zum Stummschalten des Tons
    audio1.pause()
}

//! wenn die Schaltfläche "Sprechen" angeklickt wird

document.querySelector(".sprechen").onclick = () => {
    bild.src = "./img/telefon.gif"

    audio1.pause()
}

//! mit der Maus über das Bild fahren

// bild.onmouseover = () => {}  (erster Weg)

bild.addEventListener("mouseover", () => {

    bild.src = "./img/aslan2.jpeg"
    document.querySelector(".audio2").play()
    audio1.pause()
})

//! wenn die Maus das Bild verlässt

bild.addEventListener("mouseout", () => {

    bild.src = "./img/aslan1.jpeg"
    document.querySelector(".audio2").pause()
})


//! die Veränderung, die eintritt, wenn wir die Hand von der Taste nehmen, während wir Daten von der Tastatur in den Eingabebereich eingeben


const textInput = document.querySelector(".textbox")
const checkInput = document.querySelector(".checkbox")

textInput.onkeyup = () => {

    //     if (checkInput.checked) {
    //         textInput.value = textInput.value.toUpperCase()
    //     } else {
    //         textInput.value = textInput.value.toLowerCase()
    //     }


    checkInput.checked
        ? (textInput.value = textInput.value.toUpperCase())
        : (textInput.value = textInput.value.toLowerCase())

}


//! h1-Tag "Programmiersprachen" am Anfang meiner Liste hinzufügen (langer Weg)

// ? HTML DE h1 elementi oluştur

// const title = document.createElement("h1")

// {
//     /* <h1></h1> */
// }

// //? oluşan h1 elementine class ismi ata

// title.className = "title2"

// {
//     /* <h1 class="baslik2"></h1> */
// }

// //?Programlama Dilleri text i oluştur

// const text = document.createTextNode("Programmierungssprachen")

// //? h1 elementi için oluşturduğum text i h1 e child yapalım

// title.appendChild(text)

// {
//     /* <h1 class="baslik2"> Programlama Dilleri</h1> */
// }

// const inputdiv = document.querySelector(".input-div")
// //? input-div class isimli div in son child ı yapalım
// inputdiv.appendChild(title)


// //? input-div class isimli div den hemen sonraya ekle
// inputdiv.after(title)

//!!  "append" metodu ile seçtiğimiz Html etiketi bitmeden önceki son kısma ekleme yapabiliriz (<div>merhaba -buraya-  </div>).  "prepend" metodu ile seçtiğimiz Html etiketi başladıktan sonraki ilk kısma ekleme yapabiliriz  (<div> -buraya-  merhaba   </div>).  "after" metodu ile ile seçtiğimiz Html etiketi bittikten sonraki ilk kısma ekleme yapabiliriz (<div> merhaba </div>  -buraya-). before ile de etiketin önüne ekleyebiliriz.


//! Abkürzung (backtick)

// const inputdiv = document.querySelector(".input-div")

// inputdiv.innerHTML = inputdiv.innerHTML + h1

//? inputdiv.innerHTML +=  `<h1 class="title3 text-primary">Programmierungssprachen</h1>`

//! kisayol ile daha önce event yapilmis bir tagin icerigine ekleme yaparsak hata alabiliriz. Bu yüzden yeri olmayan bir etiketi kisa yol ile eklemek istiyorsak, HTML'de onun icin bos bir "div " acmakta fayda vardir.


document.querySelector(".bug").innerHTML += `<h1 class="title3 text-primary">Programmierungssprachen</h1>`
