// Exercise 12: Write a function `calculateBMI` 
// that takes two arguments: weight (in kg) and height (in meters).
// The function should return the BMI (Body Mass Index), rounded to two decimal places.
// The formula for BMI is: BMI = weight (kg) / height (m)^2. To get the squared value of height, 
// just multiply height by itself.
// Example: calculateBMI(70, 1.75) should return 22.86.

const calculateBMI = function (num1, num2){
    const data = [num1, num2];
    
    const BMI = data.reduce((acc, cur) => {
        return acc / (cur ** 2)
    })
    return BMI.toFixed(2);
}

console.log(calculateBMI(70, 1.75)); // Expected output: 22.86