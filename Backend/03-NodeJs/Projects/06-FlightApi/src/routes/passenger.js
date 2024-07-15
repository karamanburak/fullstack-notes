"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const router = require("express").Router();

//* URL => "/flights"

const passenger = require("../controllers/passenger");
const idValidation = require("../middlewares/idValidation");

router.route("/").get(passenger.list).post(passenger.create);
router
  .route("/:id")
  .all(idValidation)
  .get(passenger.read)
  .put(passenger.update)
  .patch(passenger.update)
  .delete(passenger.delete);

module.exports = router;
