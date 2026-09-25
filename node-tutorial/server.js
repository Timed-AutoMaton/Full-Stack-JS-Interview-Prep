function callback() {
    console.log("Prince is calling a callback function");
}

const add = function (a, b, callback) {
    let result = a + b;
    console.log(`result:` + result);
    callback();
}

add(3, 4, callback);