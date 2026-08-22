//Object Destructuring
const person = { name: "John", age: 30, city: "NYC" };

const { name, age, city } = person;

/* While destructuring an object variable names should match the property names */

console.log(name, age, city);


//Array Destructuring
const colors = ["red", "green", "blue"];

const [a, b, c] = colors;

//While the destructuring an array the variables should match the index positioning

console.log(a, b, c);
