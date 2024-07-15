"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const router = require("express").Router();

//* URL => /reservations

const reservation = require("../controllers/reservation");
const idValidation = require("../middlewares/idValidation");
const permission = require("../middlewares/permissions");

//* Login olan kullanıcılar delete hariç tüm işlemleri yapabilecek.
//? Listeleme işlemini Staf veya Adminse tüm rezervasyonlar, Staff veya Admin değilse sadece kendisine ait rezervasyonlar
//! Update işlemini Staf veya Adminse tüm rezervasyonlar, Staff veya Admin değilse sadece kendisine ait rezervasyonlar
// Delete işlemini sadece Admin yapabilir.

router.use(permission.isLogin);

router.route("/").get(reservation.list).post(reservation.create);

router
  .route("/:id")
  .all(idValidation)
  .get(reservation.read)
  .put(reservation.update)
  .patch(reservation.update)
  .delete(permission.isAdmin, reservation.delete);

module.exports = router;
