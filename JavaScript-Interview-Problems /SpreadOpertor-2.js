function add(a, b, c) {
    return a + b + c;
}

const vals = [1, 2, 3];

console.log(add(...vals));

// Spread ... Unpacks an array into individual values, spread opertor is used in the argument