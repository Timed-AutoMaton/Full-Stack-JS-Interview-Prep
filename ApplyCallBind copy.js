/* Apply, call & Bind */

// Problem statement


let userDetails = {
    name: "Anjay Suneja",
    age: 28,
    designation: "Software Engineer",
    printDetails: function () {
        console.log(this.name);
    }
}

userDetails.printDetails();

let userDetails2 = {
    name: "Zubi",
    age: 30,
    designation: "Software Engineer",
}

//function borrowing
userDetails.printDetails.call(userDetails2);