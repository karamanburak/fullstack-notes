"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const Flight = require("../models/flight");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Flight);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Flight),
      results: data.length,
      data,
    });
  },
  create: async (req, res) => {
    req.body.createdId = req.user._id;
    const data = await Flight.create(req.body);
    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    const data = await Flight.findOne({ _id: req.params.id }).populate(
      "createdId"
    );
    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    req.body.createdId = req.user._id;

    const data = await Flight.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      updatedData: await Flight.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    const data = await Flight.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount > 0 ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
