function createCounter() {
    function increment() {
        console.log("I'm increment function");
    }

    return increment;
}

const count = createCounter();
console.log(count);
