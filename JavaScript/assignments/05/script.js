const getData = async () => {

    const response = await fetch("https://randomuser.me/api/")

    // console.log(response.json());
    const myData = await response.json()

    printScreen(myData);
}

getData()

const printScreen = (data) => {
    const userData = data.results[0];
    const {name, email, phone, picture} = userData;
    const {title, first, last} = name
    const container = document.querySelector(".container")
    container.innerHTML = `
    
      <div class="card" style="width: 18rem">
            <img src="${picture.large}" class="card-img-top" />
            <div class="card-body">
                <h5 class="card-title">${title}  ${first} ${last}</h5>
                <p class="card-text">${email}</p>
                <p class="card-text">${phone}</p>
            </div>
        </div>   
    
    `
}

document.querySelector(".btn").addEventListener("click", () => {

getData()

})


