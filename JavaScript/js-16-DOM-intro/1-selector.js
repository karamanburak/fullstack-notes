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
    title[i].style.color = "cornflowerblue"
    title[i].style.textAlign = "center"
}

title[0].innerHTML = "<a href='https://github.com/karamanburak'>DOM IST SEHR EINFACH</a>"
//* innerHTML icerik ve etiket ekler.
//* textContent sadece icerik degistirmeye yarar.

title[1].textContent = "Wie geht's dir"

