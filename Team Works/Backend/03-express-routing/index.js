const express = require('express');
const app = express();
const PORT = process.env?.PORT || 8000
const HOST = process.env?.HOST || '127.0.0.1'

const router = express.Router();
app.use(router);

// Middleware to parse JSON bodies
app.use(express.json());


//^ Example 1
//? Route for /abc or /adc path
// app.get(/\/a[b|d]c/, (req, res) => {
//     res.send("Route First");
// }) 

//^ Example 2 
//? Write a router that matches /a(any single digit)/ followed by 2 times c or 3 times c or
// app.get(/\/a[0-9]\/c{2,3}/, (req, res) => {  // http://127.0.0.1:8000/a1/cc http://127.0.0.1:8000/a1/ccccccc  || res => Matched Route ?
//     res.send('Matched Route');
// });

//^ Example 3 
//? Routes that must end with string "Hello" and can have any no. of any character before that .
// app.get(/.*Hello$/, (req, res) => {  // http://127.0.0.1:8000/Hello http://127.0.0.1:8000/1aHello || res => Matched Route ?
//     res.send('Matched Route');
// });

//? Example 4 
//? Matching routes must end with the string "Hello" and must not have any characters before that.
// app.get(/Hello$/, (req, res) => {  // http://127.0.0.1:8000/Hello  || res => Matched Route ?
//     res.send('Matched Route');
// });


//^ Example 5
//? I have an object with student information.Code the desired routers
//! 1-) Returns all students in json format with the get method
//! 2-) returns information about the requested student in json format
//! 3-) If there is any missing / error in the code, please correct it.


// const students = [
//     {
//         id: 1,
//         name: "Alex",
//     },
//     {
//         id: 2,
//         name: "Steve",
//     },
// ];
//! 1-) Returns all students in json format with the get method
// router.get("/", (req,res) => {
//     // Route to return all students in JSON format
//     res.json(students)
// })


// //! 2-) returns information about the requested student in json format
// router.get("/:id", (req, res) => {

//     const student = students.find(s => s.id === parseInt(req.params.id));
//     if (!student) {
//         return res.status(404).send("Student not found.");
//     }
//     res.json(student);
// });

//! 3-) If there is any missing / error in the code, please correct it.


//^ Example 6
//? import the Express framework and create an Express application.
//? define a middleware function using app.use().This function logs a message and then calls next() to pass control to the next middleware or route handler.
//? define a route handler for the root URL('/') using app.get().This handler will respond with "Hello!" when a GET request is made to the root URL.
//? Finally, srart the Express server and listen on port 3000.
// app.use((req, res, next) => {
//     console.log('Middleware function called!');
//     next(); // Pass control to the next middleware or route handler
// });

//! Define a route handler for the root URL ('/') using app.get()
//! This handler will respond with "Hello!" when a GET request is made to the root URL
// app.get('/', (req, res) => {
//     res.send('Hello!');
// });

// // Start the Express server and listen on port 3000
// const PORT1 = 3000;
// app.listen(PORT1, () => {
//     console.log(`Server is running on port ${PORT1}.`);
// });


//^ Example 7
//? In the code block below, a custom error middlaware is missing which returns a 500 status code and the detail of the error generated.Complete the code.

// const express1 = require("express");
// const app1= express1();

// app1.use('/',(req, res, next) => {
//     throw new Error("Something went wrong!");

// });

// // Custom error handler middleware
// const errorHandler = (err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send(`Internal Server Error: ${err.message}`);
// };

// app1.use(errorHandler);

// Start the server
// app1.listen(PORT, () => {
//     console.log(`Example app listening at http://${HOST}:${PORT}`);
// });



// Start the server
app.listen(PORT, () => {
    console.log(`Example app listening at http://${HOST}:${PORT}`);
});
