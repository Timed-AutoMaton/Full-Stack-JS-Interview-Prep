"use strict";
;
let user = {
    name: "Zubi",
    age: 29,
    email: "abc@xyz.com",
    id: 1,
};
let laptop = {
    name: "MacBook Pro",
    price: 2000,
    getDiscount(percentage) {
        return this.price * (percentage / 100);
    },
};
