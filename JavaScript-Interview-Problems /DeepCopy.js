const user = {
    name: "decode",
    hobbies: ["Web Development", "Coffee", "DIY"],
};

const copied = JSON.parse(JSON.stringify(user));

copied.name = "Zubi";
copied.hobbies.push("reading", "Maths");

console.log(user);
console.log(copied);





