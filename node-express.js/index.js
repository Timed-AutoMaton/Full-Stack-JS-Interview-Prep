const fs = require("fs");

// sync operation
// fs.writeFileSync("./sample.txt", "Hey guys!");
// fs.writeFileSync("./sample.txt", " Neural Network!", { flag: "a" });


//async
// fs.writeFile("./sample.txt", "Hello World!", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("return file");
//     }
// })


console.log(1);
const result = fs.readFileSync("./sample.txt", "utf-8");
console.log(result);
console.log(2);
fs.readFile("./sample.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});
console.log(3);

