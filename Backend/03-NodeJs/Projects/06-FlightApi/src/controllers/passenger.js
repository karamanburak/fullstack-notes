"use strict";
const { CustomError } = require("../errors/customError");
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const Passenger = require("../models/passenger");

module.exports = {
  list: async (req, res) => {
    // let customFilter = {};
    // if (!req.user.isAdmin && !req.user.isStaff) {
    //   customFilter = { createdId: req.user._id };
    // }
    const data = await res.getModelList(Passenger, customFilter);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Passenger, customFilter),
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
    // if (!req.user.isAdmin && !req.user.isStaff) {
    //   const checkData = await Passenger.findOne({ _id: req.params.id });
    //   if (checkData.createdId?.toString() != req.user._id.toString()) {
    //     throw new CustomError(
    //       "NoPermission: You must to be Admin or Staff or Own!",
    //       403
    //     );
    //   }
    // }
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
