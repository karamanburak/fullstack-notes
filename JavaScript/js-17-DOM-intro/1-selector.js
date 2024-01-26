//* ======================================================
//*                   GETELEMENTBYID()
//* ======================================================

//^ Example-1 button style

const button = document.getElementById("btn")

button.style.width = "200px"
button.style.height = "80px"
button.style.fontSize = "80px"
button.style.backgroundColor = "red"

//^ Example-2 paragraf style

const paragraf = document.getElementById("par").style
paragraf.width = "300px"
paragraf.heigth = "80px"
paragraf.fontSize = "30px"
paragraf.color = "red"
paragraf.margin = "200px"


//* ======================================================
//*                   GETELEMENTSBYTAGNAME()
//* tag ismiyle çağırıyoruz.aynı tag den çok olacağı için index le hangisini seçtiğimizi belirtiyoruz (HTMLCollection- Array özellikleri gösterir)
//*================================================

const picture = document.getElementsByTagName("img")
console.log(picture);
picture[0].style.width = "300px"
picture[0].style.border = "5px solid black"
picture[1].style.width = "300px"
picture[1].style.border = "5px solid red"

//* ======================================================
//*                   GETELEMENTSBYCLASSNAME()
//* class ismiyle çağırıyoruz
//* ======================================================

const title = document.getElementsByClassName("h1")
console.log(title);

title[0].style.color = "purple"
title[1].style.fontSize = "50px"



//* HTMLCollection larda Array'i degistirmeyen metodlari kullanabilirsiniz!
for (let i = 0; i < title.length; i++) {
    title[i].style.color = "red"
    title[i].style.textAlign = "center"
}

title[0].innerHTML = "<a href='https://github.com/karamanburak'>DOM IST SEHR EINFACH</a>"
//* innerHTML icerik ve etiket ekler.
//* textContent sadece icerik degistirmeye yarar.

title[1].textContent = "Alles in Ordnung?"

//* ======================================================
//*                  QUERYSELECTOR,QUERYSELECTORALL
//*======================================================

document.querySelector("title").textContent = "DOM MANIPULATION🎡"
document.querySelector("#body").style.backgroundImage = "linear-gradient(cornflowerblue, yellowgreen)"
document.querySelector(".h2").style.color = "maroon"

const parag = document.querySelectorAll("p")
console.log(parag); // NodeList

parag[1].style.fontSize = "50px"


// Bir NodeList ve bir HTMLcollection hemen hemen aynı şeydir.

// Her ikisi de bir belgeden çıkarılan düğümlerin (öğelerin-node) dizi benzeri koleksiyonlarıdır (listeleridir). Düğümlere indeks numaraları ile erişilebilir. indeks 0'dan başlar.

// Her ikisinin de listedeki (koleksiyon) öğelerin sayısını döndüren bir uzunluk özelliği (length) vardır.


// HTMLCollection öğelerine adları, kimlikleri veya dizin numaralarıyla erişilebilir.
// baslik.namedItem("id1").style.color = "red";
//  baslik[0].style.color="red";

// NodeList öğelerine yalnızca dizin numaralarıyla erişilebilir.

// Bir HTMLCollection her zaman canlı bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, HTMLCollection'daki liste de değişecektir.

// Bir NodeList genellikle statik bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, NodeList'teki liste değişmez.
// getElementsByClassName()ve yöntemleri , getElementsByTagName() canlı bir HTMLCollection döndürür.

// querySelectorAll(), statik bir NodeList döndürür.
//!burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/ adresinden göster
// Dizi Değil!
// Bir NodeList bir dizi gibi görünebilir ama öyle değildir.

// Bir NodeList içinde döngü yapabilir ve düğümlerine dizine göre başvurabilirsiniz.

// Ancak, bir NodeList'te push(), pop() veya join() gibi Array yöntemlerini kullanamazsınız.