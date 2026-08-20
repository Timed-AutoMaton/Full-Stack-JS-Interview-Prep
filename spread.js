//Spread Operator Examples
const array = [1, 2, 3];
console.log(...array);

//copying an array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray);

//Merging arrays
const array1 = [1, 2, 3];
const array2 = [4, 5];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);

//Passing multiple arguments to a function
const numbers = [1, 2, 3, 4, 5];
function sum(a, b, c, d, e) {
    console.log(a + b + c + d + e);
}
sum(...numbers);



