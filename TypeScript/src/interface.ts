//Interface
interface User {
    name: string;
    age: number;
    email?: string;
    readonly id: number;
};

let user: User = {
    name: "Zubi",
    age: 29,
    email: "abc@xyz.com",
    id: 1,
};