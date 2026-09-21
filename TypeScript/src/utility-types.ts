interface Todo {
    title?: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    assignedTo: String;
}

//Partial - makes all properties optional
type PartialTodo = Partial<Todo>;

let updateTodo: PartialTodo = {
    completed: true,
};

//Required - makes all properties required
type RequiredTodo = Required<Todo>;

//Pick - pick specific properties
type todoPreview = Pick<Todo, "title" | "completed">;

type TodoWithoutDate = Omit<Todo, "createdAt">;


type PageInfo = {
    title: string;
    url: string;
};

type Pages = "home" | "about" | "contact";

type Merged = Record<Pages, PageInfo>

let pages: Merged = {
    home: { title: "Home", url: "/" },
    about: { title: "About", url: "/about" },
    contact: { title: "Contact", url: "/contact" },
}


function createUser() {
    return {
        id: 1,
        name: "Zubi",
        email: "abc@xyz.com",
    };
}

type UserType = ReturnType<typeof createUser>;