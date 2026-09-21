"use strict";
class Person {
    //Constructor
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    //Methods
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
    //Getter
    getName() {
        return this.name;
    }
    //Setter
    setName(name) {
        this.name = name;
    }
}
class Employee {
    constructor(id, name, department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    getDetails() {
        return `${this.name} with id number ${this.id} works in ${this.department}`;
    }
}
let Zubi = new Employee(101, "Zubi", "Engineering");
console.log(Zubi.getDetails);
