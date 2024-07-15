"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const Passenger = require("../models/passenger");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Passenger);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Passenger),
      results: data.length,
      data,
    });
  },
  create: async (req, res) => {
    req.body.createdId = req.user._id;
    const data = await Passenger.create(req.body);
    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    const data = await Passenger.findOne({ _id: req.params.id }).populate(
      "createdId"
    );
    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    req.body.createdId = req.user._id;

    const data = await Passenger.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      updatedData: await Passenger.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    const data = await Passenger.deleteOne({ _id: req.params.id });
    res.status(data.deletedCount > 0 ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
