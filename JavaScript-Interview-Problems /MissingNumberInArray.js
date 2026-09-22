function findMissing(arr, n) {
    const expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;

    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    return expectedSum - actualSum;
}

console.log(findMissing([1, 3, 4, 5], 5));
