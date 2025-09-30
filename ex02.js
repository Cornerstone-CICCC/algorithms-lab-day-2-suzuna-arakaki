// Exercise 2: Write a function `arrayDifference` that takes two arrays and returns an array
// containing the elements that are in the first array but not in the second array.
// Example: arrayDifference([1, 2, 3], [2, 3, 4]) should return [1].

//filter , if, includes

const arrayDifference = function (arr1, arr2){
    const filterArray = arr1.filter(item => {
        if (!arr2.includes(item)){
            return arr1;
        }
    });
    return filterArray;
    
}

console.log(arrayDifference([1, 2, 3], [2, 3, 4])); // Expected output: [1]

// const filterArray = arrays.filter(item => {
//         let item0 = item;
//         // let item1 = String(item[0]);
//         // // let item1 = item[0];
//         // let item2 = String(item[1]);
//         return item0;
        
//     })
//     return filterArray;

// for (let i = 0; i <= item1.length; i++) {
//             for(let j = 0; j <= item2.length; j++){
//                 if (item1 === item2){
//                     item1[i].slice(1);
//                     return item1;
//                 }
//             }   
//         }