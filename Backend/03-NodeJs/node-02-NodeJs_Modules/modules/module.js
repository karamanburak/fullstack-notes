'use strict'

console.log('module page');

//! single function export 1.yol

/*
const testfunction = function ()  {
    console.log('this is test function');
    
}

module.exports = testfunction
*/


//! single function export 2.yol

/*
module.exports=function(){
    console.log('this is test function');
    
}
*/


// //! multi function

// const testfunction1 = function () {
//     console.log('this is test function 1');

// }

// const testfunction2 = function () {
//     console.log('this is test function 2');

// }

// const testfunction3 = function () {
//     console.log('this is test function 3');

// }

// //! multi function export 1. yol Array

// module.exports = [
//     testfunction1,
//     testfunction2,
//     testfunction3
// ]



//! multi function export 2. yol Object

// module.exports = {
//     test1: testfunction1,
//     test2: testfunction2,
//     test3: testfunction3,
//     pi: 3.14
// }


// //! shorthand - shortcut 1

// module.exports.testfunction1 = function () {
//     console.log('this is test function 1');

// }

// module.exports.testfunction2 = function () {
//     console.log('this is test function 2');

// }

// module.exports.testfunction3 = function () {
//     console.log('this is test function 3');

// }

// module.exports.message = "hello"


//! shorthand - shortcut 2
module.exports = {
    testfunction1: function () {
        console.log('this is test function 1');
    },

    testfunction2: function () {
        console.log('this is test function 2');
    },

    testfunction3: function () {
        console.log('this is test function 3');
    },
    message: "hello"
}



