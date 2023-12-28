// let js = 'amazing'
// if (js === 'amazing') alert('JavaScript is FUN!')



// console.log(40 + 8 + 23 - 10);

// let firstName = "Matilda"

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // Variable name conventions
// let jonas_matilda = "JM"
// let $function = 27

// let person = "jonas"
// let PI = 3.1415

// let myFirstJob = "Programmer"
// let myCurrentJob = "Teacher"

// let job1 = "programmer"
// let job2 = "teacher"

// console.log(myFirstJob);

// console.clear()


// let javascriptIsFun = true
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "Jonas");

// javascriptIsFun = "YES!"
// console.log(typeof javascriptIsFun);

// let year
// console.log(year);
// console.log(typeof year);

// year = 1991
// console.log(typeof year);

// year = "name"
// console.log(typeof year);

// console.log(typeof null);

//  console.clear()


// let age = 30
// age = 31

// const birthYear = 1991
// // birthYear = 1990
// // const job 

// var job = "programmer"
// job = "teacher"

// lastName = "Schmedtmann"
// console.log(lastName);


//^ Math Operators
// const now = 2037
// const ageBurak = now - 1994
// const ageSarah = now - 2018
// console.log(ageBurak, ageSarah);

// console.log(ageBurak * 2, ageBurak / 10, 2 ** 3 );

// const firstName = 'Burak'
// const lastName = 'Karaman'
// console.log(firstName + ' ' +lastName);

//^ Assignment Operators
// let x = 10 + 5 // 15
// x +=10 // x = x + 10 = 25
// x *= 4 // x = x * 4 =100
// x++ // x = x +1
// x--
// x--
// console.log(x);

//^ Comparison operators
// console.log(ageBurak > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18


// console.log(now - 1994 > - 2018);

// const now = 2037
// const ageBurak = now - 1994
// const ageSarah = now - 2018

//  console.log(now - 1994 > - 2018);

// let x, y 
// x = y = 25-10-5  // x = y = 10
// console.log(x, y);

// const averageAge = (ageBurak + ageSarah) / 2
// console.log(ageBurak, ageSarah, averageAge);


// const firstName = 'Jonas'
// const job = 'teacher'
// const birthYear = 1991
// const year= 2037
// const jonas = "I'm " + firstName + ', a ' + (year - birthYear ) + ' years old ' + job + '!'

// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
// console.log(jonasNew);

// console.log(`Just a regular string`);
// console.log(`String with \n\ multiple \n\ lines`);
// console.log(`String 
// multiple
// lines`);

// const age = 17
// const isOldEnough = age >= 18

// if (age >= 18) {
// console.log('Sarah can start driving license 🚗');
// } else {
//     const yearsLeft = 18 - age
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1994
// let century
// if (birthYear < 2000) {
//     century = 20
// } else {
//     century = 21
// }
// console.log(century);

//^ Type conversion
// const inputYear = '1994'
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(Number('Burak') )
// console.log(typeof NaN);

// console.log(String(23), 23);

//^ Type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1 // '11'
// n = n - 1 
// console.log(n);

//^ 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Burak'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100
// if(money) {
//     console.log("Don't spend it all ;)");
// } else {
//     console.log('You should get a job!');
// }

// let height = 0
// if(height){
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// }

//^ Equality Operators == vs ===
// const age = '18'
// if(age === 18) console.log('You just became an adult :) (strict)');

// if(age == 18) console.log('You just became an adult :) (loose)');

// const favourite = Number(prompt("What's your favourite number?"))
// console.log(favourite)
// console.log(typeof favourite);

// if(favourite === 23) // '23' == 23 true // '23' === 23 false
// console.log('Coll! 23 is an amazing number!');

//  const hasDriversLicense = true // A
//  const hasGoodVision = true // B

//  console.log(hasDriversLicense && hasGoodVision);
//  console.log(hasDriversLicense || hasGoodVision);
//  console.log(!hasDriversLicense);
//  console.log(!hasGoodVision);

//  if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
//  } else {
//     console.log('Someone else should drive...');
//  }

//  const isTired = false
//  console.log(hasDriversLicense && hasGoodVision && isTired);

//  if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
//  } else {
//     console.log('Someone else should drive...');
//  }

// const day = 'monday'

// switch (day){
//    case 'monday':  // day === 'monday'
//       console.log('PLan course structure');
//       console.log('Go to coding meetup');
//       break
//    case 'tuesday':
//          console.log('Prepare theory videos');
//          break
//    case 'wednesday':
//    case 'thursday':
//             console.log('Write code examples');
//             break
//    case 'friday':
//       console.log('Record videos');
//       break
//    case 'saturday':
//    case 'sunday':
//       console.log('Enjoy the weekend');
//       break
//    default:
//       console.log('Not a valid day!');    

// }


// const day = 'monday'

// if (day === 'monday'){
//    console.log('Plan course structure');
//    console.log('Go to coding meetup');
   
// } else if (day === 'tuesday') {
//    console.log('Prepare theory videos');

// } else if (day === 'wednesday' || day === 'thursday') {
//    console.log('Write code examples');
// } else if (day === 'friday') {
//    console.log('Record videos');
// } else if (day === 'saturday' || 'sunday'){
//    console.log('Enjoy the weekend');
// } else {
//    console.log('Not a valid day!');  
// }

