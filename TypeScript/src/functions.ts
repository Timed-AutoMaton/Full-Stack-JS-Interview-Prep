function add(a: number = 3, b: number = 1): number {
    return a + b;
}

function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }

    return `Hello, ${name}!`;
}

//Rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}

//Arrow functions 
const divide = (a: number, b: number): number => a / b;


//Function types
let calculate: (x: number, y: number) => number;

calculate = add;

