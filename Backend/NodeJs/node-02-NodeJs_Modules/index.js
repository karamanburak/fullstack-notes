'use strict'

console.log("module lesson on nodeJs in index.js");


// require('./modules/module')


// //! single function 
// const testfunction = require('./modules/module')
// testfunction()



// //! multi function import 1. yol array 
// const [test1, test3, test2] = require('./modules/module') // export sirasina göre aktarir.

// test1()
// test2()
// test3()


// //! multi function import 2. yol object
// const {test1, test2, test3} = require('./modules/module')

// test2()
// test1()
// test3()

//! multi function import 3. yol object (gelen verilerin keylerini destructring ederken degistirme)
// const {test1: t1, test2:t2, test3:t3,pi} = require('./modules/module')

// t2()
// t1()
// t3()
// console.log(pi);


const { testfunction1: t1, testfunction2, testfunction3:t3,message} = require('./modules/module')

testfunction2()
t1()
t3()
console.log(message);


