// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

// define the variable called "vowles" = [a, e, i, o, u]
//consonants = !str.includes(vowles) return consonants.length

const countConsonants = function (str){
    const vowles = " aeiouAEIOU";
    let consonants = 0;
    for (let char of str){
        if (!vowles.includes(char)){
            consonants++ 
        }
    }

    return consonants;
}

console.log(countConsonants("hello world")); // Expected output: 7