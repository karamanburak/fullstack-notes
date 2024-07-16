"use strict";

const { CustomError } = require("../errors/customError");

/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

module.exports = {
  isLogin: (req, res, next) => {
    if (req.user && req.user.isActive) {
      next();
    } else {
      throw new CustomError("NoPermission: You must login.", 403);
    }
  },
  isLoginStaffOrAdmin: (req, res, next) => {
    if (
      req.user &&
      req.user.isActive &&
      (req.user.isStaff || req.user.isAdmin)
    ) {
      next();
    } else {
      throw new CustomError(
        "NoPermission: You must login and to be Staff or Admin.",
        403
      );
    }
  },
  isLoginAdmin: (req, res, next) => {
    if (req.user && req.user.isActive && req.user.isAdmin) {
      next();
    } else {
      throw new CustomError(
        "NoPermission: You must login and to be Admin.",
        403
      );
    }
  },

  isStaffOrAdmin: (req, res, next) => {
    if (req.user.isStaff || req.user.isAdmin) {
      next();
    } else {
      throw new CustomError(
        "NoPermission: You must to be Staff or Admin.",
        403
      );
    }
  },
  isAdmin: (req, res, next) => {
    if (req.user.isAdmin) {
      next();
    } else {
      throw new CustomError("NoPermission: You must to be Admin.", 403);
    }
  },
  isAdminOrStaffOrOwn: async (req, res, next) => {
    if (!req.user.isAdmin && !req.user.isStaff) {
      const checkData = await req.model.findOne({ _id: req.params.id });
      if (checkData.createdId?.toString() != req.user._id.toString()) {
        throw new CustomError(
          "NoPermission: You must be Admin or Staff or own!",
          403
        );
      }
    }
    next();
  },
};
