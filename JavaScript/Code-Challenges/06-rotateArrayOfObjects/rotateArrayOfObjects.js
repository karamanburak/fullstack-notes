
//* -------------------------------------------------------------------------- */
//*                            ROTATE ARRAY OBJECTS                            */
//* -------------------------------------------------------------------------- */
//? Rotate Array of Objects
//? Write a function that rotates an array of objects to the right by a given number of steps.

function rotateArrayObjects(arr, steps) {

    for (let i = 0; i < steps; i++) {
        arr.unshift(arr.pop())
    }

    return arr

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