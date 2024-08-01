'use strict'
/*
    EXPRESSJS 
    ! TODO ROUTER
*/
const router = require('express').Router()

const todoTemplate = require('../controllers/todoTemplate')


router.get("/", todoTemplate.list)
router.get("/create", todoTemplate.create)
router.post("/create", todoTemplate.create)

router.get("/:todoId", todoTemplate.read)
router.get("/update/:todoId", todoTemplate.update)


// app.use(router)
module.exports = router


// app.all('/',(req, res)=>{
//     res.send('TODO APP')
// })

/*
app.use('/todo',(req, res)=>{ // TODO + ALL url
    res.send('TODO APP')
})
*/