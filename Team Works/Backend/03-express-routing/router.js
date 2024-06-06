"use strict";

//?-----------------1.SORU-------------------//
// const express = require("express");
// const router = express.Router();
// //******Write a router that matches /abc or /acd path********/

// router.get(/\/abc|\/acd/, (req, res) => {
// 	res.send("<h1>Path Matched1</h1>");
// });

// //******Write a router that matches /a(any single digit)/ followed by 2 times c or 3 times c or********/
//!/\/a\d{1}(c{2}|c{3})/
//! ^\/a\d\/c{2,3}$

// router.get(/\/a\d{1}\/c{2}|\/a\d{1}\/c{3}/, (req, res) => {
// 	res.send("<h1>Path Matched2</h1>");
// });

// router.get(/\/a\d\/c{2,3}/, (req, res) => {
// 	res.send("Path matched a(number)cc-ccc!");
// });

// //******Routes that must end with string "Hello" and can have any no. of any character before that .********/

// router.get(/.*Hello$/, (req, res) => {
// 	res.send("<h1>Path Matched3</h1>");
// });

// //******Matching routes must end with the string "Hello" and must not have any characters before that.********/

// router.get(/^\/Hello$/, (req, res) => {
// 	res.send("<h1>Path Matched4</h1>");
// });

// module.exports = router;

//!2.kisa yol

// const express = require("express");
// const router = express.Router();

// // Tüm kuralları tek bir router.get() içinde birleştirmek
// router.get(
//     [
//         /\/abc|\/acd/,                         // /abc veya /acd yollarını eşleştirir
//         /\/a\d(c{2}|c{3})/,                    // /a(bir rakam) ardından 2 veya 3 adet 'c' olan yolları eşleştirir
//         /.*Hello$/,                            // Herhangi bir karakter dizisi sonrasında "Hello" ile biten yolları eşleştirir
//         /^\/hello$/                            // Sadece "Hello" ile biten ve öncesinde başka karakter olmayan yolları eşleştirir
//     ],
//     (req, res) => {
//         res.send("<h1>Path Matched</h1>");
//     }
// );

// module.exports = router;

//?-----------------2.SORU-------------------//

//*I have an object with student information. Code the desired routers.

//!Returns all students in json format with the get method
//!returns information about the requested student in json format
//!If there is any missing/error in the code, please correct it.

// const express = require("express");
// const app = express();
// const router = express.Router();

// app.use(express.json());

// const students = [
// 	{
// 		id: 1,
// 		name: "Alex",
// 	},
// 	{
// 		id: 2,
// 		name: "Steve",
// 	},
// ];

// //Tüm ögrencileri almak icin
// router.get("/students", (req, res) => {
// 	res.json(students);
// });

// //Belirli ögrencileri almak icin
// router.get("/students/:id", (req, res) => {
// 	const id = parseInt(req.params.id);
// 	const student = students.find((student) => student.id === id);
// 	if (!student) {
// 		return res.status(404).json({ message: "Student not found" });
// 	}
// 	res.json(student);
// });

// router.get("/", (req, res) => {
// 	res.send("Welcome to the student API!");
// });
// // app.use("/", router);

// module.exports = router;
