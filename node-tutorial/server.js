const add = function (a, b, zubi) {
    let result = a + b;
    console.log(`result:` + result);
    zubi();
}

add(2, 3, function () {
    console.log(`add completed`);
});