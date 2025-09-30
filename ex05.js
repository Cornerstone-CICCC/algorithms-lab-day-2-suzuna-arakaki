// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

// define the variable called "vowels" = [a, e, i, o, u]
//consonants = !str.includes(vowels) return consonants.length

const countConsonants = function (str){
    const vowels = " aeiouAEIOU";
    let consonants = 0;
    for (let char of str){
        if (!vowels.includes(char)){
            consonants++ 
        }
    }
    return consonants;
}

console.log(countConsonants("hello world")); // Expected output: 7