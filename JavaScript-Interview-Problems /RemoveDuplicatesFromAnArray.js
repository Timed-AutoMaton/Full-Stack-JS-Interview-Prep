function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 5, 8, 4, 6, 8, 8, 9]));

