"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

const ReservationSchema = new mongoose.Schema(
  {
    flightId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight",
      required: true,
    },
    passengers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Passenger",
        required: true,
      },
    ],
    createdId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    collection: "reservations",
    timestamps: false,
  }
);

module.exports = mongoose.model("Reservation", ReservationSchema);
