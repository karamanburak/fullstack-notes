
const defaultImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg";


const getNews = async() => {

    const API_KEY = "1a1a999e0d7240a6bd2dead87bcca78e"

   const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)

   const data = await res.json()
console.log(data.articles);
   renderNews(data.articles)

}

getNews()

const renderNews = (news) => {

    news.forEach((news)=> {

        const{urlToImage,title} = news  //!destructuring
        document.querySelector("#news").innerHTML+=`
        <img src = "${urlToImage ? urlToImage : defaultImage}"/>
        
        
        
        `
    })
}
