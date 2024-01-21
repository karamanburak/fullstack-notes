//& CHALLENGE 1
//^ Find the Missing Number
//* You are given an array containing n distinct numbers taken from the range 1 to n+1. The array is missing one number. Write a function to find and return the missing number.

//^ Challenge Description:
//* Write a function findMissingNumber that takes an array arr as an argument. The array contains n distinct
//* numbers taken from the range 1 to n+1. It means that one number is missing from the array. Your task is to find and return that missing number.
//^ Constraints:
//* The array will always have at least one element.
//* The numbers in the array are distinct and taken from the range 1 to n+1, where n is the length of the array.
//! Note: You can assume that there will always be exactly one missing number.


function findMissingNumber(arr) {
    // Your code here 




    // Example usage:
    const missingNumber = findMissingNumber([1, 2, 4, 6, 3, 7, 8]);
    console.log(missingNumber); // Output: 5




    //& CHALLENGE 2
    //^ Rotate Array of Objects
    //* Write a function that rotates an array of objects to the right by a given number of steps.
    //^ Challenge Description:
    //* Write a function rotateArrayObjects that takes an array of objects arr and an integer steps as input.
    //* The function should rotate the elements of the array to the right by the given number of steps. The
    //* order of objects should be maintained during rotation.
    //^ Constraints:
    //* The array can contain both objects and other data types.
    //* The number of steps will be a non-negative integer.

    function rotateArrayObjects(arr, steps) {
        // Your code here 
    }

    // Example usage:
    const inputArray = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' },
        { id: 4, name: 'Alice' }
    ];

    const rotatedArray = rotateArrayObjects(inputArray, 2);
    console.log(rotatedArray);
/* 
Output: [ 
    { id: 3, name: 'Bob' }, 
    { id: 4, name: 'Alice' }, 
    { id: 1, name: 'John' }, 
    { id: 2, name: 'Jane' } 
] 
*/