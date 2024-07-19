"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// sync():

module.exports = async function () {
  //   return null;

  /* REMOVE DATABASE */
  const { mongoose } = require("../configs/dbConnection");
  await mongoose.connection.dropDatabase();
  console.log("- Database and all data DELETED!");
  /* REMOVE DATABASE */

  const User = require("../models/user");
  const Car = require("../models/car");

  await User.create({
    username: "admin",
    password: "Password1!",
    email: "admin@site.com",
    firstName: "admin",
    lastName: "admin",
    isActive: true,
    isStaff: true,
    isAdmin: true,
  });
  console.log("- Admin user created.");

  await User.create({
    username: "staff",
    password: "Password1!",
    email: "staff@site.com",
    firstName: "staff",
    lastName: "staff",
    isActive: true,
    isStaff: true,
    isAdmin: false,
  });
  console.log("- Staff user created.");

  await User.create({
    username: "user",
    password: "Password1!",
    email: "user@site.com",
    firstName: "user",
    lastName: "user",
    isActive: true,
    isStaff: false,
    isAdmin: false,
  });
  console.log("- User created.");

  /*
    await Car.create({
        plateNumber: "34ABC1234",
        brand: "Ford",
        model: "Focus",
        year: 2020,
        isAutomatic: true,
        pricePerDay: 149.99
    })
    console.log('- Ford Car created.')

    await Car.create({
        plateNumber: "34ABC1235",
        brand: "Renault",
        model: "Megane",
        year: 2022,
        isAutomatic: true,
        pricePerDay: 209.99
    })
    console.log('- Ford Car created.')

    await Car.create({
        plateNumber: "34ABC1236",
        brand: "Opel",
        model: "Astra",
        year: 2024,
        isAutomatic: true,
        pricePerDay: 249.99
    })
    console.log('- Ford Car created.')
    */
};
