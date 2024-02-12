//^* ============================================================================//
//^*                             Checkout Page Solution                          //
//^*  map filter, dest,spread ===================================================//

//!table da kullanılacak değişkenler
const shipping = 15.0;
const tax = 0.18;

let sepettekiler = [
    { name: "Wilson Basketball", price: 34.99, piece: 1, img: "./img/photo1.png" },
    { name: "Air Jordan CPIII", price: 89.99, piece: 1, img: "./img/photo2.png" },
    { name: "NBA 2K24", price: 69.99, piece: 1, img: "./img/photo3.png" },
];


//^ ---------------------------------- */
//^               BUBLING              */
//^ ---------------------------------- */

let flag = false


let h1  = document.querySelector("h1")
h1.onclick = (e) => {
    flag=!flag
    flag 
    ? (h1.textContent = "Checkout Page") 
    : (h1.textContent = "Shopping Site")
    
    //! calis ve sonra parentini etkileme
    e.stopPropagation()

}

let header = document.querySelector("header");

header.onclick = () => {
    flag =!flag
    flag
        ? (h1.textContent = "Basketball")
        : (h1.textContent = "NBA Products")
}


//! EKRANA BASTIRMA
showScreen()


function showScreen() {

    //^ toFixed metodu sayiyi stringe cevirir.
    sepettekiler.forEach(({ name, price, piece, img }) => {

        //!DESTRUCTURING
        // const{name,price,piece,img}

        document.querySelector("#product-rows").innerHTML += `
     <div class="card mb-3" style="max-width: 540px;">

  <div class="row g-0">

    <div class="col-md-5">
      <img src=${img}  class=" w-100 rounded-start" alt="...">
    </div>

    <div class="col-md-7 ">

      <div class="card-body">
      
        <h5 class="card-title">${name}</h5>
        
             <div class="ürün-price">
                    <p class="text-warning h2">
                      <span class="discount-price">${(price * 0.7).toFixed(2)} </span> €
                      <span class="h5 text-dark text-decoration-line-through">${price} </span>
                    </p>
                  </div>

                  
                  <div
                    class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                  >
                    <div class="piece-controller">
                      <button class="btn btn-secondary btn-sm minus">
                        <i class="fas fa-minus"></i>
                      </button>
                      <p class="d-inline mx-4" id="ürün-adet">${piece}</p>
                      <button class="btn btn-secondary btn-sm plus">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>

                  </div>

                  <div class="ürün-removal mt-4">
                    <button class="btn btn-danger btn-sm w-100 remove-product">
                      <i class="fa-solid fa-trash-can me-2"></i>Remove
                    </button>
                  </div>

                  <div class="mt-2">
                    Product Total: <span class="product-total">${(price * 0.7 * piece).toFixed(2)}</span> €
                  </div>
      </div>
    </div>
  </div>
</div>
    `


    })

}


//! Browserdaki toplam fiyatlarin oldugu table'in güncelleme fonksiyonu

calculateCardTotal()

removeButton()

pieceButton()

//! SILME FONKSIYONU

function removeButton() {

    document.querySelectorAll(".remove-product").forEach((btn)=> {
        btn.onclick = ()=> {
            //^ Ekrandan silmek icin
            btn.closest(".card").remove()


            //^ Diziden (Array) silmek icin
            sepettekiler = sepettekiler.filter((product) =>product.name!= btn.closest(".card").querySelector("h5").textContent)

            calculateCardTotal()
        }
    })
    
}

//! ADET DEGISTIRME VE ÜRÜN TOPLAM GÜNCELLEME

function pieceButton () {

    document.querySelectorAll(".piece-controller").forEach((box)=> {

       const plusButton = box.lastElementChild
       const minusButton = box.firstElementChild
       const piece = plusButton.previousElementSibling // 1 yazisinin p etiketini cagirmak icin 1. yol
        // const piece = box.children[1] // 1 yazisinin p etiketini cagirmak icin 2. yol


        //! Plus butonuna basilinca olacaklar
        plusButton.onclick = () => {
            
            // ekranda güncellendi
            piece.textContent++;

            // diziden (Arrayden) güncelle


            // ürün toplamin ekranda güncellenmesi

            plusButton.closest(".card-body").querySelector(".product-total").textContent = (plusButton.closest(".card-body").querySelector(".discount-price").textContent * piece.textContent).toFixed(2)
            
            calculateCardTotal()

        }

        //! Minus butonuna basilinca olacaklar

        minusButton.onclick = () => {

            // ekranda güncellendi
            piece.textContent = Number(piece.textContent)-1;

            // diziden (Arrayden) güncelle


            // ürün toplamin ekranda güncellenmesi

            minusButton.closest(".card-body").querySelector(".product-total").textContent = (minusButton.closest(".card-body").querySelector(".discount-price").textContent * piece.textContent).toFixed(2);

            calculateCardTotal()

            //! adet 1 iken minusa basilirsa ürün ekrandan ve diziden silinsin
            if(piece.textContent < 1 && confirm("The Product will be deleted, are you sure?")){
                minusButton.closest(".card").remove()

            }




        }
    })


}




//! Card toplam degerlerini hesaplama
function calculateCardTotal() {

    //! her bir card daki ürün toplam kısımları
    const a = document.querySelectorAll(".product-total");
    //!   querySelectorAll(), statik bir NodeList döndürür.
    //!burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/
    // Dizi Değil!
    // Bir NodeList bir dizi gibi görünebilir ama öyle değildir.
    // Bir NodeList içinde döngü yapabilir ve düğümlerine dizine göre başvurabilirsiniz.
    // Ancak, bir NodeList'te reduce(), push(), pop() veya join() gibi Array yöntemlerini kullanamazsınız.

    //? productsToplam= en alttaki tüm ürünler için vergi ve kargo hariç sepettekilerin indirimli fiyat toplamı
    //?Reduce tam olarak Array istiyor, nodelist yeterli değil

    // console.log(a); //^ NodeList verir dizimsi (dizi degildir)
    // console.log(Array.from(a)); //^ Array.from() dizimsiyi diziye (Array'e cevirir)

    const productsTotal = Array.from(a).reduce((acc, item) => acc + Number(item.textContent), 0)
    // console.log(productsTotal);

    document.querySelector(".productstoplam").textContent = (productsTotal).toFixed(2)

    document.querySelector(".tax").textContent=(productsTotal*tax).toFixed(2)

    document.querySelector(".shipping").textContent = productsTotal ? shipping : 0

    document.querySelector(".total").textContent = productsTotal > 0 ? (productsTotal + productsTotal*tax + shipping )
    .toFixed(2) : 0

}


