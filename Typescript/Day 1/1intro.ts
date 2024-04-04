let person = {
    name : "Jayesh",
    roll : 1
}

console.log("Hi Typescript!");
console.log(person.name);


//This will always be the string and cannot be assigned to another data type
//Also the suggestions are based on the data type assigned to the variable.
//In Javascript the functions suggested were from all the data types.

//Strongly Typed Language
let name:string = "Jayesh";
console.log(name);

//Number covers all the Floats, Doubles, Integers in it
let num1 : number = 10;
num1 = 102.3314;

//Boolean
let isAdmin:boolean = true;


export {}
