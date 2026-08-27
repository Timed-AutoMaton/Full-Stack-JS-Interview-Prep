function double(value) {
    return function execute(num) {
        return num * value;
    }
}

const n = double(20)(5);
console.log(n);

