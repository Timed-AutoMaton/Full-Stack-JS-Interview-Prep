/* Apply, call & Bind */

// Problem statement


let userDetails = {
    name: "Salman",
    age: 26,
    designation: "Software Engineer",
}

let printDetails = function (state, country) {
    console.log(`${this.name} lives in ${state} and he is from ${country}`);
}


let userDetails2 = {
    name: "Zubi",
    age: 30,
    designation: "Software Engineer",
}

let newFun = printDetails.bind(userDetails2, "Lahore", "Pakistan");
newFun();

