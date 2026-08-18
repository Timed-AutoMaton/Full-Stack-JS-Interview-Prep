//Global - accessible anywhere
let globalVariable = "global";

greet();

function greet() {
    //Function - accessible inside function only 
    let functionVariable = "function";

    if (true) {
        //Block - accessible inside block only 
        let blockVariables = "block";
        console.log(blockVariables);
        console.log(functionVariable);
        console.log(globalVariable);
    }
}


//Scope determines where variables are defined and where they can be accessed