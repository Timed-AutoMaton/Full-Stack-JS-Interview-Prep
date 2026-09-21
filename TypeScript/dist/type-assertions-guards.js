"use strict";
//Type assertions
let someValue = "Hello World!";
let strLength = someValue.length;
//Or
let strLength2 = someValue.length;
// Type guards
function processValue(value) {
    if (typeof value === "string") {
        console.log(value.toLocaleLowerCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
// instanceof type guard
class Dog {
    bark() {
        console.log("Woof!");
    }
}
class Cat {
    meow() {
        console.log("Meow!");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
