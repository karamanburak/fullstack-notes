
// short circuit
let liste = JSON.parse(localStorage.getItem("LİSTE")) || []
 
// let liste = JSON.parse(localStorage.getItem("LİSTE")) ? JSON.parse(localStorage.getItem("LİSTE")):[]


const addButton = document.querySelector("#todo-button");
const listUl = document.querySelector("#todo-ul");
const todoInput = document.querySelector("#todo-input");
const totalSpan = document.querySelector("#toplam");
const completeSpan = document.querySelector("#tamamlanan");


//!add butonuna tıklandığında
addButton.onclick = () => {
  //input boşken
  if (!todoInput.value) {
    alert("lütfen bir not giriniz");

    //daha önce listeye eklenen not bir daha eklenmesin
  } else if (liste.includes(todoInput.value)) {

    return;
  
  } else {
    liste.push(todoInput.value);

    //!listeye eleman eklenince localStorage deki LİSTE yi güncelle

    localStorage.setItem("LİSTE", JSON.stringify(liste))

    //!ekranda listeyi göster
   showList()

   

    todoInput.value = "";

   
  }
 
};


const showList=()=>{

    //!liste kayıtlı yerden gelip UI a bastırılacak, UI da varolan tekrar basılmış olmasın diye, önce ekranı temizledik
   listUl.textContent=""

liste.forEach((todo)=>{

listUl.innerHTML =
  `
<li class="ayse">
<i class="fa fa-check fa-lg"></i>


<p>${todo}</p>


<i class="fa fa-trash fa-lg"></i>
</li>` + listUl.innerHTML;

})

   

createDeleteButon()
createCheckButon()

}


const createDeleteButon = () => {
  document.querySelectorAll(".fa-trash").forEach((a) => {
    a.onclick = () => {
      //!listeden silme

      liste = liste.filter(
        (todo) => todo != a.closest("li").querySelector("p").textContent
      );

      a.closest("li").remove();
    

      localStorage.setItem("LİSTE", JSON.stringify(liste))
    
    };
  });
};

const createCheckButon = () => {
  document.querySelectorAll(".fa-check").forEach(
    (a) =>
      (a.onclick = () => {
      

        if (a.parentElement.classList.contains("checked")) {
          a.parentElement.classList.remove("checked");
        
        } else {
          a.parentElement.classList.add("checked");
        
        }
      
      })
  );
};



//!ekran ilk açıldığında localstorage dekileri getir
 showList()