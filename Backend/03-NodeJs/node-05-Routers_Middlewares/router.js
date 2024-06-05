'use strict'

const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env?.PORT || 8000
const HOST = process.env?.HOST || '127.0.0.1'


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })


//* --------------------------------------------------- * //
//? "Router" is special app for URL control in ExpressJS.

// express.Router()
// const router = express.Router()

// //? router.route()
// router.route("/").get((req, res) => { res.send({ message: "Hello World"})})

// router.route('/user')
//     .get((req, res) => res.send({ message: "User Hello World! GET"}))
//     .post((req, res) => res.send({ message: "User Hello World! POST"}))
//     .put((req, res) => res.send({ message: "User Hello World! PUT"}))
//     .delete((req, res) => res.send({ message: "User Hello World! DELETE"}))

/* ------------------------------------------------------- */
//? Move to /routes/index.js:
// const router = require('./routers/index.js')
// const router = require('./routers/index')
// const router = require('./routers/')
//const router = require('./routers')
//app.use(router)

/* ------------------------------------------------------- */

const { middlewareOne, middlewareTwo } = require('./middlewares/')
const router = require('./routers')

app.use(middlewareOne, middlewareTwo)
app.use(router)

app.listen(PORT, () => {
    console.log(`Example app listening on port http://${HOST}:${PORT}`)
})