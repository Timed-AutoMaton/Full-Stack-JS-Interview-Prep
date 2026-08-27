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
garbage collector runs along with JS interpretor, the interpretor runs some code then stops for sometime for garbage collector to run */