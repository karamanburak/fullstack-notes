"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
//* Project Starter Command
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ npm i nodemailer multer
    $ mkdir logs
    $ nodemon
*/
//* Use _projectStarter folder
/*
    $ cp .env-sample .env
    $ mkdir logs
    $ npm install
    $ nodemon
*/

const express = require("express");
const app = express();

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());
// Accept FormData
app.use(express.urlencoded({ extended: false }));

// Logger:
app.use(require("./src/middlewares/logging"));

// Auhentication:
app.use(require("./src/middlewares/authentication"));

// findSearchSortPage / res.getModelList:
app.use(require("./src/middlewares/queryHandler"));

/* -------------------------------------------------------------------------- */
/*                                    Email                                   */
/* -------------------------------------------------------------------------- */

//! nodemailer
// https://nodemailer.com/
// https://ethereal.email/ (testing email)

// const nodemailer = require("nodemailer");

// nodemailer.createTestAccount().then(data=> console.log(data))
// {
//   user: 'zbzbtrkybv5t24wm@ethereal.email',
//   pass: 'jEYA9g4kdzt5RUK96t',
//   smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
//   imap: { host: 'imap.ethereal.email', port: 993, secure: true },
//   pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
//   web: 'https://ethereal.email',
//   mxEnabled: false
// }

//* Connect Nodemailer
// const transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // Use `true` for port 465, `false` for all other ports => ssl/tls
//   auth: {
//     user: "zbzbtrkybv5t24wm@ethereal.email",
//     pass: "jEYA9g4kdzt5RUK96t",
//   },
// });

//SenMail
// transporter.sendMail({
//   from: '"Anthony Harold 👻" <zbzbtrkybv5t24wm@ethereal.email>', // sender address
//   to: "devfss99@gmail.com", // single user
// //   to: "bar@example.com, baz@example.com", // list of receivers
//   subject: "Hello ✔", // Subject line
//   text: "Hello world?", // plain text body
//   html: "<b>Hello world?</b>", // html body
// },(error,success)=>{
//     error ? console.log(error) : console.log(success)
// });

//* GoogleMail (gmail)
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "devfs99@gmail.com",
//     pass: "hmqp yjwy oloo pdjd",
//   },
// });

// //? YandexMail (yandex):
// const transporter = nodemailer.createTransport({
//     service: 'Yandex',
//     auth: {
//         user: 'username@yandex.com',
//         pass: 'password' // your emailPassword
//     }
// })

// transporter.sendMail(
//   {
//     // from:"devfs99@gmail.com",
//     to: "devfs99@gmail.com",
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   },
//   (error, success) => console.log(success, error)
// );

/* ------------------------------------------------------- */
// Routes:

// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PIZZA API",
    docs: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
    user: req.user,
  });
});

// routes/index.js:
//app.use(require('./src/routes/'))//* default yazmadığımızda kök route u esas alır.
app.use("/", require("./src/routes/"));

//*Static Files
app.use("/uploads", express.static("./uploads")); //* resim vb dosyalar static dosyalardır. bunalrın işlenebilmesi için express.static middlewareine ihtiyacımız var.

//* eşleşmeyen routeları yakalar
app.use((req, res, next) => {
  res.status(404).send({
    error: true,
    message: "Route not found!",
  });
});

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.
