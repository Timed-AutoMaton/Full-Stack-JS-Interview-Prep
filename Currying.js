function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3));


function curriedMultiply(a) {
    return function (b) {
        return a * b;
    };
}

const double = curriedMultiply(2);
console.log(double(3));
