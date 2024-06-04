//kurulum
// https://expressjs.com/en/starter/installing.html
// kill $(lsof -t -i:8000) // portu kapatmak (öldürmek) icin


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
app.get('/elbise/kadin', (req,res) => {res.send({message: 'GET method called'})})
// http://127.0.0.1:8000/elbise/kadin

app.get('/elbise(ler)?', (req, res) => { res.send({ message: 'GET method called (elbise(ler))'})})
// app.get('/elbiseler', (req, res) => { res.send({ message: 'GET method called (elbiseler)'})})



app.listen(PORT, () => {
    console.log(`Example app listening on port http://${HOST}:${PORT}`)
})