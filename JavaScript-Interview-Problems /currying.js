function Addition(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

const res = Addition(2)(4)(7);

console.log(res);
