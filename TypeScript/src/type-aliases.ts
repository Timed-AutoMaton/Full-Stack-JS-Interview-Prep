type Point = {
    x: number;
    y: number;
};

let point: Point = { x: 10, y: 20 };

//Type alias for primitives
type ID = string | number;

let userId: ID = "Zubi";
let productId: ID = 52000;

interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

let myDog: Dog = {
    name: "Buddy",
    breed: "Golden Retriever"
};

// Interfaces can be declared multiple times and will merge
interface Animal {
    name: string;
}

interface Animal {
    age: number;
}

let dog: Animal = {
    age: 3,
    name: "Buddy",
};

// use interfaces for objects
// type aliases for unions/intersection