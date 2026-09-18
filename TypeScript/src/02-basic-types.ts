//Primitive 

let username: string = "Zubi";
let age: number = 29;
let isAdmin: boolean = true;

//Arrays
let numbers: number[] = [1, 2, 3, 4];
let fruits: string[] = ["Mango", "Banana", "Apple"];

// tuple
let person: [string, number] = ["Zubi", 29];

//Enum 
enum Color {
    Red,
    Green,
    Blue
}

let favoriteColor: Color = Color.Blue;


//Any 
let randomValue: any = 10;
randomValue = "Zubi";
randomValue = true;

//Unknown (safer than any)
let userInput: unknown;
userInput = 5;
userInput = "text";

// Void (for functions that don't return)
function subscribe(message: string): void {
    console.log(message);
}

//Null and Undefined
let nullValue: null = null;
let Undefined: undefined = undefined;