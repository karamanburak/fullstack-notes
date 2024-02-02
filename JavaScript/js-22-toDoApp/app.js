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

        // <p>${todoInput.value}</p> => 2. yol



    }



}