'use strict'
/*
     NODE JS SERVER
*/
console.log("hallo from index.js");

const http = require('node:http');

// dotenv.config()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT
const HOST = process.env.HOST

// http.createServer((parametre1, param2)=>{

//     console.log("server running...");
    
// })

//1. param request, 2. param response

/*
const app = http.createServer((req, res) => {
    res.end("server runned")

     // res.end("bye") // birden fazla res.end kullanilmaz hata verir!
     // console.log(req.method);
     // console.log("server running...");

})
// app.listen(8000)
// app.listen(PORT,()=>console.log("server runned http://127.0.0.1"))
app.listen(PORT,()=>console.log(`server runned http://${HOST}`))
*/

                            //* SERVER  *\\

const app = http.createServer((req, res) => {


    res.end("server runned")


})
app.listen(PORT, () => console.log(`server runned http://${HOST}:${PORT}`))