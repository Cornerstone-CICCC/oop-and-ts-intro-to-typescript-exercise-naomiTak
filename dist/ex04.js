"use strict";
// 4. Create a function named `findMax` that takes an array of numbers as a parameter.
//    The function should return the largest number in the array.
//    Ensure the parameter and return type are typed.
function findMax(numbers) {
    const aryMax = function (a, b) { return Math.max(a, b); };
    const result = numbers.reduce(aryMax);
    return result;
}
// Expected output:
console.log(findMax([1, 5, 3, 9, 2])); // 9
console.log(findMax([7, 2, 10, 4])); // 10
