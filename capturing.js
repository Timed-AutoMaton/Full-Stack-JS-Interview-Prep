var div = document.querySelector("div");
var button = document.querySelector("button");

div.addEventListener("click", () => {
    console.log("div");
}, true);

button.addEventListener("click", () => {

    console.log("button");
}, true);