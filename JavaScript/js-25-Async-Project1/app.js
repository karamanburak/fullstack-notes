const mealsDiv = document.querySelector(".food")


fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=").then((response) => response.json()).then((data)=>showScreen(data.meals)).catch((err)=>console.log(err));

function showScreen (data) {

data.forEach((meal)=>{

mealsDiv.innerHTML += `

<div class="col-md-3 m-1">

<p>${meal.strMeal}</p>
<img style = width:200px src="${meal.strMealThumb}"/>
</div>


`

})

}

