function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 5, 5, 4, 8, 4, 6, 8, 8, 9]));

