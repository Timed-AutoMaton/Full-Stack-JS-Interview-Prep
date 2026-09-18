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