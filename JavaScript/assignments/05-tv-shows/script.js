


let searchShows = [];

const getShows = async () => {

    const response = await fetch("./tv-shows.json");
    const data = await response.json()
    console.log(data);
    searchShows = data
    showScreen(data)
}

getShows()

function showScreen(data) {
    document.querySelector(".tvShowList").innerHTML = ""
    const showList = document.querySelector(".tvShowList")
    console.log(showList);
    data.forEach((item) => {
        showList.innerHTML += `
        
        <div class="card mx-3 col-md-4 col-lg-3 " style="width: 18rem; ">
  <img src="${item.show.image.medium}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <a href="${item.show.url}" target="_blank" class="btn btn-primary">Details</a>
  </div>
</div>
        
        `
    })
}

document.querySelector("#search").oninput = (e) => {

    let data = searchShows.filter((show) => show.name.toLowerCase().includes(e.target.value.toLowerCase()))
    showScreen(data)
    console.log(data);

}