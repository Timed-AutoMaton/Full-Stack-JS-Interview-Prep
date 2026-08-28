function createCounter() {

    let count = 0;
    function increment() {
        count++;
        return count;
    }
    return increment;
}


const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


/*garbage collector's responsibility is to remove the memory from heap, the memory that is not being pointed by anything, in JS
garbage collector runs along with JS interpretor, the interpretor runs some code then stops for sometime for garbage collector to run.
and for the same reason in the code above, the garbage collector won't remove the count variable since the count variable is being pointed
by counter which is a reference to increment function, and when you run the counter function again it will remember the count variable's
current state.*/

/* So Closure is a function that remembers variables from its outer scope even after the outer function has finished executing */