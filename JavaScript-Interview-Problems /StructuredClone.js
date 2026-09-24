const user = {
    name: "decode",
    hobbies: ["Web Development", "Coffee", "DIY"],
};

const copied = structuredClone(user);

copied.name = "Zubi";
copied.hobbies.push("reading", "Maths");

console.log(user);
console.log(copied);





