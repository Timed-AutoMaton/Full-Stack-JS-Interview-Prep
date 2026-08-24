const originalObject = {
    name: "happy",
    age: 30,
    city: "Lahore"
}

const clonedObjectJSON = JSON.stringify(originalObject);

console.log(clonedObjectJSON);

const ParsedObjectJSON = JSON.parse(clonedObjectJSON);

console.log(originalObject);

console.log(ParsedObjectJSON);

