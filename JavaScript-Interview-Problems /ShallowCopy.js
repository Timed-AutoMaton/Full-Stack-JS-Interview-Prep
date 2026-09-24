const user = {
    name: "decode",
    hobbies: ["Web Development", "Coffee", "DIY"],
};

const copied = { ...user };

copied.name = "Zubi";
copied.hobbies.push("reading");

console.log(user);
console.log(copied);





