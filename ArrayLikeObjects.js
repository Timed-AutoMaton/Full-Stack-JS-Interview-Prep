const str = "Hello";
console.log(str);
console.log(str.length);
console.log(str[0]);

/* Array like objects are objects that have indexed elements and a length property, similar to arrays, but they may not have all the methods
of arrays like push(), pop() & others. */

function sum() {
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[0]);
}

sum(1, 2, 3);

//Accessing HTML collection
const boxes = document.getElementsByClassName("box");

//Accessing elements in HTML collection using index

console.log(boxes[0]);
//Accessing length property of HTML collection
console.log(boxes.length);

