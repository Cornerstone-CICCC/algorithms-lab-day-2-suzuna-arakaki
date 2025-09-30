// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

// for loop
// loop i = 1, i <= array.length +1
// check -> if the arr inclueds the i or not
// if not includes (!) return i

const findMissingNumber = function (arr) {
    for (let i = 1; i <= arr.length + 1; i++){
        if (!arr.includes(i)){
            return i;
        }
    }
}

console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3

// const lagestNum = arr.length + 1;
//     return lagestNum;

// const lagestNum = arr.length + 1;
//     arr.filter((item) => {
//         if (item)
//     })

// const findLagestNum = arr.find((item, cur) => {
    //         if (item >= cur) {
    //             findLagestNum = item;
    //             return findLagestNum;
    //         }
    //     })

    // return arr.find((item) => {
    //     if ()
    // })