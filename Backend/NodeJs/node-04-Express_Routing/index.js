//kurulum
// https://expressjs.com/en/starter/installing.html
// kill $(lsof -t -i:8000) // portu kapatmak (öldürmek) icin


/*
! https://restfulapi.net/http-status-codes/
? HTTP defines these standard status codes that can be used to convey the results of a client’s request. The status codes are divided into five categories.

1xx: Informational – Communicates transfer protocol-level information.
2xx: Success – Indicates that the client’s request was accepted successfully.
3xx: Redirection – Indicates that the client must take some additional action in order to complete their request.
4xx: Client Error – This category of error status codes points the finger at clients.
5xx: Server Error – The server takes responsibility for these error status codes.
 */ 


'use strict'

const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env?.PORT || 8000
const HOST = process.env?.HOST || '127.0.0.1'

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/', (req, res) => {
//     //! 1. yol 
//     // res.write('Hello World')
//     // res.end()
//     //! 2. yol
//     res.send('Hello World')
// })

// app.all('/', (req,res,next) => { // tüm istekler 
//     console.log('req >>', req);
//     next()
// })

// app.get("/", (req, res) => {res.send('GET method called')}) // listeleme veya veri (bilgi) almak icin.
// app.post("/", (req, res) => { res.send('POST method called')}) // yeni bir kullanici veya bilgi kaydetmek icin

// app.put("/", (req, res) => { res.send('PUT method called')}) // bilgi güncellemesi yapmak icin

// app.patch("/", (req, res) => { res.send('PATCH method called')}) // bilgi güncellemesi yapmak icin

// app.delete("/", (req, res) => { res.send('DELETE method called')}) // silme islemi icin kullanilir
app.get('/elbise/kadin', (req, res) => { res.send({ message: 'GET method called' }) })
// http://127.0.0.1:8000/elbise/kadin

// app.get('/elbise', (req, res) => { res.send({ message: 'GET method called (elbiseler)'})})
// app.get('/elbiseler', (req, res) => { res.send({ message: 'GET method called (elbiseler)'})})

app.get('/elbise(ler)?aa', (req, res) => {
    console.log(req.url);
    res.send({ message: 'GET method called (elbise(ler))' })
})
// http://127.0.0.1:8000/elbiseleraa
// http://127.0.0.1:8000/elbiseaa

//! regex !\\
// https://www.geeksforgeeks.org/how-to-setup-regex-for-expressjs-router-url-in-node-js/
//^ Example 1 (.../test/ => icerisinde test olmali)
// app.get(/test/, (req, res) => { res.send('GET method called') }) // request icinde test yazisi olmali
// http://127.0.0.1:8000/test
// http://127.0.0.1:8000/test000
// http://127.0.0.1:8000/asdasdasdtestasdasd

//^ Example 2 (.../test$/ => test ile bitmeli)
// app.get(/test$/, (req, res) => { res.send('GET method called') }) // sonda dolar isareti olunca test ile bitmeli
// http://127.0.0.1:8000/test
// http://127.0.0.1:8000/asdasdasdtest


//! url params
//^ Example 1
// app.get("/:userId", (req, res) => { res.send(req.params) }) // : dan sonra gelen her seyi calistirir. res.send() icinde ne yazilirsa sonuc onu verir.
//http://127.0.0.1:8000/userIdasdasd2323  res => {"userId": "userIdasdasd2323"}

//^ Example 2
// app.get("/:userId/:productId", (req, res) => {
//     const { userId, productId } = req.params
//     console.log(userId, productId);

//     // res.send({ userId: userId, productId: productId })
//     res.send({ userId, productId }) // key ve value ayni ise ikinci bir deger kullanmaya gerek yoktur (best-practice)
// })

//^ Example 3
// app.get("/:userId/:productId", (req, res) => {
//     res.send({
//         protocol: req.protocol,
//         hostname: req.hostname,
//         method: req.method,
//         url: req.url,
//         params: req.params,
//         body: req.body,
//         query:req.query,
//         header:req.headers
//     })
// })


//! Query
// app.get("/", (req, res) => {
//     res.send({query: req.query})
// })
// http://127.0.0.1:8000/?name=test&surname/=user res => {"query": {"name": "test", "surname": "user"}}


//! IMPORTANTE
// app.get("/:name-:surname/:topCategory/:subCategory/:gender-:genderCategory", (req, res) => {
//     res.status(202).send(req.params)
// })
// http://127.0.0.1:8000/test-user/elbise/pantolon/kadin-pantolon 
// res => {"name": "test", "surname": "user", "topCategory": "elbise",  "subCategory": "pantolon",  "gender": "kadin", "genderCategory": "pantolon"}


//? Extra information
app.get('/', (req,res) => {
    // res.redirect('https://www.google.com')
    res.redirect(302,'/about')
})

app.get('/about', (req,res) => {
    res.send('about')
})




app.listen(PORT, () => {
    console.log(`Example app listening on port http://${HOST}:${PORT}`)
})

