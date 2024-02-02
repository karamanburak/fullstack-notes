//! Local Storage siz yol

let list = []

//! boş liste hem database işini kolaylaştırır, hem ul ye eklenen verinin aynısı tekrar eklenmesin demek için ,bütün p leri çağır içeriğinde input.value deki değer varsa ekleme, demeli ama p oluşmadan bunu diyemeyiz, bu şekilde liste dizisine eklenen veri globalde old için içeriğine (includes) her yerden bakılabilir


let total = 0;
let completed = 0;

const addButton = document.querySelector("#todo-button")
const listUl = document.querySelector("#todo-ul")
const todoInput = document.querySelector("#todo-input")
const totalSpan = document.querySelector("#toplam")
const completeSpan = document.querySelector("#tamamlanan")

addButton.onclick = () => {
// input bos iken
    if(!todoInput.value){

        alert("Please enter a Note")
        // Daha önce listeye eklenen not bir daha eklenmesin.
    } else if(list.includes(todoInput.value)){
        // listUl.textContent.includes(todoInput.value)

        return
        // return=if in içindeki şart true ise hiçbirşey yapma, koda alt satırdan devam et demek

    } else{

        list.push(todoInput.value)


        //! Ekranda listeyi göster
        listUl.innerHTML= `
        <li class="empty">
        <i class="fa fa-check"></i>
        <p>${list[list.length-1]}</p>
        <i class="fa fa-trash fa-lg"></i>
        </li>` +listUl.innerHTML;


        //! ekrana bastirmanin 2.yolu
        // <p>${todoInput.value}</p> 


        total+=1
        totalSpan.textContent = total

        todoInput.value= ""

        //? Her "li" girisinde cursor inputun icinde olsun
        todoInput.focus();
    }

     //!silme metodu, ekrana basıldığı süslü de (add butonuna basilma süslüsünde func.sope) olmalı, dışarıda fa-trash lara tıklayınca, remove mantıklı değil, ortada fa-trash daha oluşmadan (add butonuna basılmadan) js ye çağırmak gibi oluyor.
    //! Trash butonuna tiklaninca 
    createDeleteButton()


    //! chech butonuna tiklaninca 
    createCheckButton()
}

const createDeleteButton=()=>{

    document.querySelectorAll(".fa-trash").forEach((a)=> {
        //! listeden silme
        list.filter((todo)=>todo!=a.closest("li").querySelector("p").textContent)


        //! ekrandan (browser dan) silme

        a.onclick=()=>{
            // a.parentElement.remove()
             //! closest=herhangi bir elemanın istediğiniz uzaklıktaki parent ına götürür. yani a.parentElement.parentElement.parentElement ile 3. babaya ulaşabilirken closest ile 3. babanın adını yazarak direk ulaşabiliriz
            a.closest("li").remove()
            total = total - 1;
            totalSpan.textContent=total
        }
    })
}

const createCheckButton=()=>{

document.querySelectorAll("fa-check").forEach(
    (a)=> 
(a.onclick=()=>{
    // if(a.parentElement.className=="checked"){
    //     a.parentElement.className=""
    // }else{
    //     a.parentElement.className="checked"
    // }

    if(a.parentElement.classList.contains("checked")){
        a.parentElement.classList.remove("checked")
        completed-=1
    }else{
        a.parentElement.classList.add("checked");
        completed+=1

    }
    completeSpan.textContent=completed
})
)

}

// !! classList ve className sonuç istendiğinde aynı sonucu verir tek farkla; classList bir liste, className bir isim şeklinde verir. bunun tek dezavantajı, zaten class ı olan bir elemana className="örnek" şeklinde eleman atamak istersek, varolan elemanları silip sadece örnek class ı nı atar. classList ile toggle ve contains kullanmalıyız, className ile toggle kullanamıyoruz , className de contains yerine includes kullanmalıyız, javascriptte includes tercih edilir