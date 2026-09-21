//String literal types
let direction: "north" | "south" | "east" | "west";

direction = "Hello world!";


//Numeric literal types 
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;

diceRoll = 9;

//Combining with other types
type SuccessResponse = {
    status: "sucess";
    data: any;
};

type ErrorResponse = {
    status: "error";
    message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;