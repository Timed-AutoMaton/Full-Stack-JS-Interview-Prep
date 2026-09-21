//Type assertions
let someValue: unknown = "Hello World!";
let strLength: number = (someValue as string).length;

//Or
let strLength2: number = (<string>someValue).length;

// Type guards
function processValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toLocaleLowerCase());
    } else {
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

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}