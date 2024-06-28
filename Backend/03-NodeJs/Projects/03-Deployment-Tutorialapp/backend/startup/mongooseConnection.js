"use strict";

const mongoose = require("mongoose");
const { CustomError } = require("../errors/customError");

const mongooseConnection = async () => {
  try {
    // if (!process.env.MONGODB_URI) throw new Error("Mongodb uri is required");
    if (!process.env.MONGODB_URI) throw new CustomError();
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected");
  } catch (error) {
    throw new Error("MongoDB connection is failed!");
  }
};

module.exports = { mongooseConnection };
