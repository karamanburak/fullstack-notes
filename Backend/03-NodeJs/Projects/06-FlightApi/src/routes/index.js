"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// ROUTER INDEX:

// URL: /

// auth:
router.use("/auth", require("./auth"));
// user:
router.use("/users", require("./user"));
// flight:
router.use("/flights", require("./flight"));
// passanger:
router.use("/passengers", require("./passenger"));
// reservation:
router.use("/reservations", require("./reservation"));

// document:
router.use("/documents", require("./documents"));

/* ------------------------------------------------------- */
module.exports = router;
