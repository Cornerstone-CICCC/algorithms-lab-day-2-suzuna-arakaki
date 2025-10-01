// Exercise 9: Write a function `sortByProperty` that takes an array of objects
// and a property name, and returns the array sorted by that property in ascending order.
// Example: sortByProperty([{name: "Alice", age: 30}, {name: "Bob", age: 25}], "age")
// should return [{name: "Bob", age: 25}, {name: "Alice", age: 30}].

const sortByProperty = function (item) {
    // const person = item; // I didn't need it...
    function comparatorFunction(a, b) {
        if(a.age > b.age) return 1;
        if(a.age < b.age) return -1;
        return 0;
    }
    return item.sort(comparatorFunction);
}

console.log(sortByProperty([{name: "Alice", age: 30}, {name: "Bob", age: 25}], "age")); // Expected output: [{name: "Bob", age: 25}, {name: "Alice", age: 30}]

// const ageChecker = person.filter((key) => {
//         const personAge = key.age
//         return personAge;
//     })
//     return ageChecker.sort(comparatorFunction);