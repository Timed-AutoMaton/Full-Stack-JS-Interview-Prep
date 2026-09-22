function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0); // =>That 0 is the initial value of the accumulator (acc).
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));
