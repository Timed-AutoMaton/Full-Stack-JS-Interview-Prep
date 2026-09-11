const path = require("path");
console.log(path.dirname("/home/underwood/Desktop/myWork/CS/Full-Stack-JS-Interview-Prep/node-express.js/index.js"));
console.log(path.extname("/home/underwood/Desktop/myWork/CS/Full-Stack-JS-Interview-Prep/node-express.js/index.js"));
console.log(path.basename("/home/underwood/Desktop/myWork/CS/Full-Stack-JS-Interview-Prep/node-express.js/index.js"));
const result = (path.parse("/home/underwood/Desktop/myWork/CS/Full-Stack-JS-Interview-Prep/node-express.js/index.js"));
if (result.name === "index") {
    console.log("yes");
}
else {
    console.log("No");
}
