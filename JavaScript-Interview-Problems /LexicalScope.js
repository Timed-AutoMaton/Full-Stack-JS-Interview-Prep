function outer() {
    let num = 1;

    function inner() {
        const updatedNum = num++;
        console.log(updatedNum);
    }
    return inner;
}

const myFunc = outer();  /* after outer function runs it returns the inner function the entire code reference is then stored into
                             the variable myFunc, and when the function expression myFunc is called the inner function is called 
                             And upon multiple calls of myFunc() the garbage collector doesn't remove the garbage value
                              "secret" since inner function is pointing to a value so, garbage collector ignores it*/
myFunc();
myFunc();
myFunc();
