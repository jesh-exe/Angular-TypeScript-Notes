let name;

function getName() {
    return "Jayesh";
}

name = getName();

// In this case the name has ANY type, which is not recommended
// Use Strict Checking of the return type of the function by declaring the variable with the desired type required
// This will ensure only the required type is returned from the function

let name1 : string;
name1 = getName();

console.log(name1);

export {}