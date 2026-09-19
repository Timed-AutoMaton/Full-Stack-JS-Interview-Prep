"use strict";
//Primitive 
let username = "Zubi";
let age = 29;
let isAdmin = true;
//Arrays
let numbers = [1, 2, 3, 4];
let fruits = ["Mango", "Banana", "Apple"];
// tuple
let person = ["Zubi", 29];
//Enum 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Blue;
//Any 
let randomValue = 10;
randomValue = "Zubi";
randomValue = true;
//Unknown (safer than any)
let userInput;
userInput = 5;
userInput = "text";
// Void (for functions that don't return)
function subscribe(message) {
    console.log(message);
}
//Null and Undefined
let nullValue = null;
let Undefined = undefined;
