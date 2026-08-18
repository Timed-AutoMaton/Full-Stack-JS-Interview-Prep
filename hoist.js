//Function hoisting
myFunction();

function myFunction() {  /* JavaScript engine interprets the code using top down method, however, in a specific case like this where a function
is called first before its declaration and initialization, JavaScript engine automatically move the declaration/initialization part above the 
function call with the help of a technique called hoisting*/
    console.log("Hello!");
}

//Output: Hello