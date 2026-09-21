//write a function to flatten a nested array

const flatten = (arr) => {
    arr.reduce((acc, cur) => {
        Array.isArray(cur) ? acc.concat(flatten(cur)) : acc.concat(cur)
    }, [])
}


let arr = [1, [2, [3, 4, 5]]];

flatten(arr)