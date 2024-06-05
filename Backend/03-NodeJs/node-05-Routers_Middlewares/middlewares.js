'use strict'

/* -------------------------------------------------------
                EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */
const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'
/* ------------------------------------------------------- */
//? Middleware functions must be has three parameters.
//? Last parameter is for next().

//^ Middleware:

//^ Example 1
// http://127.0.0.1:8000?username=clarusway
// app.get('/', (req,res, next) => {
//     console.log(req.query?.username)
//     if (req.query?.username === "clarusway"){
//         next()
//     } else {
//         res.send("User name is wrong!")
//     }
// } )

// app.get('/', (req, res) => {
//     res.send('Welcome to the Clarusway')
// })

//^ Example 2
// app.get('/', (req, res, next) => {
//     console.log('middleware-1 started')
//     next()

// })

// app.get('/', (req, res, next) => {
//     console.log('middleware-2 started')
//     next()

// })

// app.get('/', (req, res, next) => {
//     console.log('middleware-3 started')
//     next()

// })

// app.get('/', (req, res, next) => {
//     console.log('middleware-4 started')
//     next()

// })

// app.get('/', (req, res, next) => {
//     console.log('middleware-5 started')
//     next()

// })

// app.get('/', (req, res) => {
//     res.send('Welcome to the Clarusway')
// })


/* --------------------------------------------------- */
//? Function
//& https://expressjs.com/en/guide/writing-middleware.html
// const middlewareFunction = (req,res,next) => {
//     console.log('middleware function called');
//     next()

// }

//^ Example middleware 1.yol
// const middlewareFunctionOne = (req,res,next) => {
//     console.log('middleware one function called');
//     next()
// }


// const middlewareFunctionTwo = (req,res,next) => {
//     console.log('middleware two function called');
//     next()
// }


// app.get('/', middlewareFunctionOne, middlewareFunctionTwo, (req, res) => {
//     res.send('Welcome to the Clarusway')
// })


//^ Example middleware 2.yol
// const middlewareFunctionOne = (req,res,next) => {
//     req.messageOne = 'middleware one function called'
//     next()
// }


// const middlewareFunctionTwo = (req,res,next) => {
//     res.messageTwo = 'middleware two function called'
//     next()
// }

// const middlewares = [middlewareFunctionOne, middlewareFunctionTwo]
// app.get('/', middlewares , (req, res) => {
//     res.send({
//         messageOne: req.messageOne,
//         messageTwo: res.messageTwo,
//         messaEnd: "welcome clarusway"
//     })
// })


//^ Example middleware 3.yol
const middlewareFunctionOne = (req, res, next) => {
    req.messageOne = 'middleware one function called'
    next()
}

const middlewareFunctionTwo = (req, res, next) => {
    res.messageTwo = 'middleware two function called'
    next()
}

const middlewareFunctionThree = (req, res, next) => {
    res.messageThree = 'middleware three function called'
    next()
}

const middlewares = [middlewareFunctionOne, middlewareFunctionTwo]

app.use(middlewares)
//app.use(middlewareFunctionOne)
//app.use(middlewareFunctionTwo)

app.get('/', (req, res) => {
    res.send({
        messageOne: req.messageOne,
        messageTwo: res.messageTwo,
        messageThree: res.messageThree,
        messageEnd: 'welcome clarusway'
    })
})

app.get('/user', middlewareFunctionThree, (req, res) => {
    res.send({
        messageOne: req.messageOne,
        messageTwo: res.messageTwo,
        messageThree: res.messageThree,
        messageEnd: 'welcome clarusway'
    })
})
/* --------------------------------------------------- */



app.listen(PORT, () => {
    console.log(`Example app listening on port http://${HOST}:${PORT}`)
})