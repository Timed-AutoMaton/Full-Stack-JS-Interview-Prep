const fs = require("fs");

fs.writeFileSync("./sample.txt", "Hey guys!");
fs.writeFileSync("./sample.txt", " Neural Network!", { flag: "a" });
