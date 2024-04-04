//Functions in JS had a problem of no checking of the return type and the input params
//We could send any type, which is not desirable for programmers


function addNumJS (num1, num2) {
    return num1+num2;
}

//Above, we can send any type of data to the addNumJS() function
console.log(addNumJS(10,"Jesh"));

// To avoid such conflicts, we can declare the types of variable as well

function addNumTS(num1:number, num2:number)
{
    return num1+num2;
}
//Below line may not work due to strict checking of the TS,=
// console.log(addNumTS(10,"J"));


//Arrow Function example with strict checking
let sum = (num1:number,num2:number) => {
    return num1+num2;
}



//Another problem is we can return any type of data from the fnc
//There is a way to SC(Strict Check) that too
//THis way we can provide strict checking on the function
function multiply (num1:number, num2:number) : number
{
    return num1*num2;
}

let mult = (num1 : number, num2: number) : number =>
{
    return num1*num2;
}




//We can use strict checking on functions of arrays and string too  
const hero = ["Jayesh","Tushar","Arpit"]
hero.map((hero):string => {
    return `${hero} is Hero`;
});

//Never is also an type mostly used when a function does not return anything or throws an exception or else terminates the program

function func1 () : never 
{
    throw new Error("Error");
}


