const notes = require("./notes");
let _ = require("loadash");

console.log("server file is available");


let age = notes.age;
let result = notes.addNumber(age + 18, 10);
console.log(age);
console.log(`result is now ${result}`);


console.log(_.isString("print"));
