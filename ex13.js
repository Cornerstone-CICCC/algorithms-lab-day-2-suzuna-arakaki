// Exercise 13: Write a recursive function `sumRange` that takes a number `n`
// and returns the sum of all numbers from 1 to `n`.
// Example: sumRange(5) should return 15 (1 + 2 + 3 + 4 + 5).

const sumRange = function (n){
    const array = [];
    for (let i = 1; i <= n; i++){
        array.push(i)
    }

    const sumNum = array.reduce((sum, num) => {
            return sum + num;
    }, 0);
    return sumNum;
}

console.log(sumRange(5)); // Expected output: 15