"use strict";
/* -------------------------------------------------------
                 EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

// const middlewareOne = (req, res, next) => {
//     req.messageOne = 'middleware one called'
//     next()
// }

// const middlewareTwo = (req, res, next) => {
//     req.messageTwo = 'middleware two called'
//     next()
// }

//^ Export 1. yol
// module.exports = {middlewareOne, middlewareTwo}
/* ------------------------------------------------------- */
//^ Export 2. yol
// module.exports.middlewareOne = (req, res, next) => {
//     req.messageOne = 'middleware one called'
//     next()
// }

// module.exports.middlewareTwo = (req, res, next) => {
//     req.messageTwo = 'middleware two called'
//     next()
// }
/* ------------------------------------------------------- */
//^ Export 3. yol
module.exports = {
    middlewareOne: (req, res, next) => {
        req.messageOne = 'middleware one called'
        next()
    },
    middlewareTwo: (req, res, next) => {
        req.messageTwo = 'middleware two called'
        next()
    }
}
/* ------------------------------------------------------- */