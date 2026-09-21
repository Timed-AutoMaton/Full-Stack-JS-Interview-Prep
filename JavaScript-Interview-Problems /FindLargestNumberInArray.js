function findLargest(arr) {
    if (arr.length === 0) {
        return null;
    }

    let largest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(findLargest([5,9,1,6,10,2,15,3,4,18,3,20]));

