// Exercise 15: Write a recursive function `findMax` that takes an array of numbers 
// and returns the maximum number in the array.
// Example: findMax([3, 1, 4, 1, 5, 9]) should return 9.

const findMax = function (array){
    const findMaxNum = array.reduce((max, item) => {
        if (item > max){
            return item
        } else {
            return max
        }
    }, 0)
    return findMaxNum;
}

console.log(findMax([3, 1, 4, 1, 5, 9])); // Expected output: 9


// const findMaxNum = array.filter((item) => {
//         let maxNum = 0;
//         if (item > maxNum){
//             maxNum = item;
//             return maxNum;
//         }
//     })