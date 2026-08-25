var div = document.querySelector("div");
var button = document.querySelector("button");

div.addEventListener("click", () => {
    console.log("div");
});

button.addEventListener("click", (event) => {
    console.log("button");
});

button.addEventListener("click", (event) => { 
    console.log("button1");
    event.stopImmediatePropagation();
});