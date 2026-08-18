let Person = {
    name: "Zubi",
    hobbies: ["Teaching", "Football", "Coding"],
    greet: function () {
        console.log("Name: " + this.name);
    },
};

console.log([person.name]);
console.log(person.hobbies[1]);
person.greet();

// An Object is a data type that allows you to store key-value pairs.