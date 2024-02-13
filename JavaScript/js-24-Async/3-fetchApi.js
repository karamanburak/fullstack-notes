//* ===========================================================
//*                3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamiza ve cevaplari yonetebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

//! Bu baglamda syntatic sugar benzetmesi yapilabilir
//! throw ile hata firlatirsak kodumuz o satirda durur. Kodumuzu durdurmak istemessek diger sayfadaki kodlari kullaniriz.

// Informational responses(100 – 199)
// Successful responses(200 – 299)
// Redirection messages(300 – 399)
// Client error responses(400 – 499)
// Server error responses(500 – 599)


//^ chain yapisi then()
// fetch("https://api.github.com/users").then((res)=> res.json()).then((data) =>console.log(data))


const getData = () => {
    fetch("https://api.github.com/users").then((res)=>{


if (!res.ok){

    throw new Error("url de hata var")

} 
return res.json()

}).then((data)=> showScreen(data))


} 

document.querySelector("button").onclick=()=>{

    getData()
}



const showScreen = (data) => {
    // console.log(data);

    data.forEach((person)=> {

        document.querySelector(".users").innerHTML+=`
        <h1 class="mt-5">Name: <span class="text-danger"> ${person.login}</span></h1>
        <img src=${person.avatar_url} width="50%"/>

        <h3>Node Id: ${person.node_id} </h3>
        
        `


    })

}
