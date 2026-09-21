class Person {
    private name: string;
    protected age: number;
    public email: string;

    //Constructor
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    //Methods
    public introduce(): string {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }

    //Getter
    public getName(): string {
        return this.name;
    }

    //Setter
    public setName(name: string): void {
        this.name = name;
    }

}



class Employee {
    constructor(
        private id: number,
        public name: string,
        protected department: string,
    ) { }

    getDetails(): string {
        return `${this.name} with id number ${this.id} works in ${this.department}`;
    }
}


let Zubi = new Employee(101, "Zubi", "Engineering");
console.log(Zubi.getDetails);

class Manager extends Employee {
    constructor(
        id: number,
        name: string,
        department: string,
        private teamSize: number,
    ) {
        super(id, name, department);
    }
    getTeamInfo(): string {
        return `${this.name} manages ${this.teamSize} people`;
    }
}