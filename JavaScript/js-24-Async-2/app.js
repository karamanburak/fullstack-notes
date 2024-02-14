
const defaultImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg";


const getNews = async () => {

    const API_KEY = "1a1a999e0d7240a6bd2dead87bcca78e"

    try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)

    //^ error handling
    if(!res.ok){
        throw new Error("News can not be fetched!")
    }

    const data = await res.json()
    console.log(data.articles);
    renderNews(data.articles)
    } catch (error) {
        console.log(error);
        renderError(error)
    }
};


const renderError = (err)=> {

    document.querySelector("#news").innerHTML = `
    
    <h1>${err}</h1>
    <img src="./assets/404.png"/>

    `
}
getNews()

const renderNews = (news) => {

    news.forEach((news) => {

        const { urlToImage, title,content,url } = news  //!destructuring
        document.querySelector("#news").innerHTML += `

        <div class="col-sm-6 col-md-4 col-lg-3 ">
        
        <div class="card" style="width: 18rem;">
  <img src="${urlToImage?urlToImage:defaultImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}e</h5>
    <p class="card-text">${content ? content : ""}</p>
    <a href=""${url}" target="_blank" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        
        
        
        </div>

        `
    });
};
