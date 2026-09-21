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