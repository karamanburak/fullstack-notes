"use strict";
const { CustomError } = require("../errors/customError");
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const Reservation = require("../models/reservation");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "List Reservations"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

    let customFilter = {};
    if (!req.user.isAdmin && !req.user.isStaff) {
      //* isAdmin ve isStaff degerlerinin ikisinin de false olmasi lazim
      customFilter = { createdId: req.user._id };
    }

    const data = await res.getModelList(Reservation, customFilter);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Reservation, customFilter),
      results: data.length,
      data,
    });
  },
  create: async (req, res) => {
    req.body.createdId = req.user._id;

    const data = await Reservation.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    if (!req.user.isAdmin && !req.user.isStaff) {
      const checkData = await Reservation.findOne({ _id: req.params.id });
      if (checkData.createdId?.toString() != req.user._id.toString()) {
        throw new CustomError(
          "NoPermission: You must be Admin or Staff or own!",
          403
        );
      }
    }

    const data = await Reservation.findOne({ _id: req.params.id }).populate(
      "createdId"
    );

    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    req.body.createdId = req.user._id;
    const data = await Reservation.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });
    res.status(202).send({
      error: false,
      data,
      new: await Reservation.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    const data = await Reservation.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
