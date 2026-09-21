//Generics in TypeScript
function identity<MyType>(arg: MyType): MyType {
    return arg;
}

let output1 = identity("Zubi");
let output2 = identity(100);


//Generic with Arrays
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

let myNum = getFirstElement([1, 2, 3]);
let myname = getFirstElement(["Zubi", "UnderWood"]);

//Generic interfaces
interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

let stringNumberPair: KeyValuePair<string, number> = {
    key: "age",
    value: 27,
};



//Generic Classes 
class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T): void {
        this.data.push(item);
    }

    removeItem(item: T): void {
        this.data = this.data.filter((i) => i !== item);
    }

    getItems(): T[] {
        return [...this.data];
    }
}

let textStorage = new DataStorage<string>();
textStorage.addItem("Hello");


//Generic constraints
interface lengthwise {
    length: number;
}

function logLength<T>(arg: T): T {
    console.log(arg.length);
    return arg;
}