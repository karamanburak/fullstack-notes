let showList = []; //!boş bir array aç. alttaki arama olayında datayı görebilmek için global e boş bir array açıp, fetch ile gelen data yı bu boş array e attık

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
.then((response) => response.json())
.then((data) =>
{showList=data

    showScreen(showList.meals)}
    
    )

.catch((err) => console.log(err));


//! EKRANA BASTIRMA METODU
function showScreen(data) {
    const mealsDiv = document.querySelector(".food")
    
    mealsDiv.innerHTML =""

    data.forEach((meal) => {

        mealsDiv.innerHTML += `

<div class="col-md-3 m-1">

<p>${meal.strMeal}</p>
<img style = width:200px src="${meal.strMealThumb}"/>
</div>

`
    });

};

//! bayraklara tiklaninca o bayragin ülkesinin yemekleri gelsin

document.querySelectorAll("img").forEach(
    (country) =>
    (country.onclick = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country.id}`).then((response)=> response.json()).then((data)=>showScreen(data.meals));

    })
);


//!arama inputuna yazdığım harfleri içeren yemekleri ekrana bastır (oninput=kullanıcı input elemanına her veri girişinde çalışmaktadır)

document.querySelector("#call").oninput=(e)=> {


let data = showList.meals.filter((item)=>item.strMeal.toLowerCase().includes(e.target.value.toLowerCase()))

showScreen(data)

}
