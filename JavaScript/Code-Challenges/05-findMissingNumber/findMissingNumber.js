//* -------------------------------------------------------------------------- */
//*                             FIND MISSING NUMBER                            */
//* -------------------------------------------------------------------------- */


function findMissingNumber(arr) {

    const n = arr.length + 1
    const nToplam = n * (n + 1) / 2
    const diziToplam = arr.reduce((acc, curr) => acc + curr, 0)


    return nToplam - diziToplam

}

const missingNumber = findMissingNumber([1, 2, 4, 6, 3, 7, 8])
console.log(missingNumber); // Ouput: 5