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

interface Product {
    name: string;
    price: number;
    getDiscount(percent: number): number;
}

let laptop: Product = {
    name: "MacBook Pro",
    price: 2000,
    getDiscount(percentage: number): number {
        return this.price * (percentage / 100);
    },
};