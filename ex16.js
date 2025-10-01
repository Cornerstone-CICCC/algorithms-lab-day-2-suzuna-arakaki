// Exercise 16: Use chaining to double the even numbers and then sum them.
// Example: [3, 10, 15, 7, 22, 18] → 100
// Use method chaining and write the solution in one line

const numbers = [3, 10, 15, 7, 22, 18]


const evenNumber = numbers.filter((item) => {
  if (item % 2 === 0) {
    return item;
  }
})

const sumNumber = evenNumber.reduce((sum, item) => {
  return sum = sum + (item * 2)
}, 0)

console.log(sumNumber);


// console.log(
//   numbers
// ) // Expected output: 100