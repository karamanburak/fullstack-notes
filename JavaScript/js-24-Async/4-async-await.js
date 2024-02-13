//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//?! Bu baglamda syntatic sugar benzetmesi yapilabilir.

//* Bir fonksiyonu async  hale getirmek icin fonksiyon keyword'nun onune async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi satirdaki kodun durdurulmasini saglar. Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.
//! JavaScript try anahtar kelimesi kod bloğundaki kodları çalışma zamanında test etmek için kullanılır.

//! JavaScript catch anahtar kelimesi çalışma zaman hatası sonucu oluşan hataları ekrana yazdırmak için kullanılır.

//! JavaScript throw anahtar kelimesi özel hata oluşturmayı sağlar.

//! JavaScript finally anahtar kelimesi hata oluşması veya oluşmaması durumunda (her durumda) çalışacak kodları yazdırmak için kullanılır.


const defaultImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg";

const getData = async () => {


    try {
        const response = await fetch("https://api.tvmaze.com/search/shows?q=girls");

        //? error handling
        if (!response.ok) {
            throw new Error(`url de hata var ${response.status}`)
            console.log("hata");
        }

        console.log(response);

        const data = await response.json();
        showScreen(data)

    } catch (error) {
        console.log(error);
        console.log("try-catch sayesinde kod calismaya devam eder");
    }
}

//! window yüklendigi zaman calissin
// window.onload = () => {}
window.addEventListener("load", () => {

    getData()
})


const showScreen = (data) => {

    data.forEach((item) => {

        document.querySelector("section").innerHTML += `
            
            <h1 class="mt-5 text-danger">${item.show.name} </h1>
            <img src="${item.show.image?.medium || defaultImage}  "/>
            <h3 class="fst-italic">${item.show.genres} </h3>

    })
}

    
