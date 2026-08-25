var div = document.querySelector("div");
var a = document.querySelector("a");


a.addEventListener("click", (event) => {
    console.log("a");
    event.preventDefault();
});

