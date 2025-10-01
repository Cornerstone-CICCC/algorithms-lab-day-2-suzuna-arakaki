// Exercise 11: Write a function `countWordOccurrences` that takes a string and a word,
// and returns the number of times the word appears in the string.
// Example: countWordOccurrences("hello world hello", "hello") should return 2.

const countWordOccurrences = function (string, word){
    const strings = string.split(" ");
    let count = 0;
    const checker = strings.reduce((acc, cur) => {
        if (cur === word){
            return acc += 1
        }
        return acc;
    }, 0)
    return checker;
}

console.log(countWordOccurrences("hello world hello", "hello")); // Expected output: 2