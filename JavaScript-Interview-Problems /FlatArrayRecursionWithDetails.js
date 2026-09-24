function flattenArray(arr) {
    const result = [];
    console.log("START with:", arr);

    for (const item of arr) {
        if (Array.isArray(item)) {
            console.log("Found array, recursing on:", item);
            const nested = flattenArray(item);
            result.push(...nested);
        } else {
            result.push(item);
        }
        console.log("Result so far:", result);
    }

    return result;
}

console.log("FINAL:", flattenArray([1, [2, [3, [4, 5]]]]));