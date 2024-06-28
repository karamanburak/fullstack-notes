"use strict";

class CustomError extends Error {
  name = "CustomError";
  constructor(msg, statusCode = 500) {
    super(msg);
    this.statusCode = statusCode;
    this.timestamp = new Date().toISOString();
  }
}

module.exports = { CustomError };
