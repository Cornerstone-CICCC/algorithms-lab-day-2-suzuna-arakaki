// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, 
// return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

// .map? .reduce?
// split the str
// for i <= splitChar.length
// if char, if it's existed +1

const mostFrequentChar = function (str){
    const splitChar = str.split("")
    const counts = {};
    let maxCount = 0;
    let mostFrequent = "";
    for (let i = 0; i <= splitChar.length; i++){
        const char = splitChar[i]
        if (counts[char] !== undefined){
            counts[char] += 1;
        } else {
            counts[char] = 1;
        }
        if (counts[char] > maxCount){
            maxCount = counts[char];
            mostFrequent = char; //do not put counts here. I wanna store the char, not object
        }
    }
    return mostFrequent; // do not return maxCount cuz it's numerical value
}

console.log(mostFrequentChar("javascript")); // Expected output: "a"


// return counts;

    // for (const count in counts){
    //     if (counts[char] > maxCount){
    //         maxCount = count[char];
    //         mostFrequent = count;
    //     }
    // }