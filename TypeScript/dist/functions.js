"use strict";
function add(a = 3, b = 1) {
    return a + b;
}
function greet(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}
//Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
//Arrow functions 
const divide = (a, b) => a / b;
//Function types
let calculate;
calculate = add;
