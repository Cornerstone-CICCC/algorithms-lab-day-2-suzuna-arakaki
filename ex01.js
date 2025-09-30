// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

const capitalizeWords = function (input){
    const words = input.split(" ");
    const capitalized = words.map(word => {
        let slicedWords = word[0].toUpperCase() + word.slice(1);
        return slicedWords;
    })
    return slicedWords = capitalized.join(" ");
}

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"