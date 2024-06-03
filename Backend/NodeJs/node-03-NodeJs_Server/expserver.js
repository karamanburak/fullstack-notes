'use strict'
/*
     NODE JS SERVER
*/


require('dotenv').config()
const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'

// npm i express
const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send('This server with express.js created')
})



app.listen(PORT, () => console.log(`server runned with express.js http://${HOST}:${PORT}`))