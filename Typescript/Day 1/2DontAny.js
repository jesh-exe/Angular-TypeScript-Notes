"use strict";
exports.__esModule = true;
var name;
function getName() {
    return "Jayesh";
}
name = getName();
// In this case the name has ANY type, which is not recommended
// Use Strict Checking of the return type of the function by declaring the variable with the desired type required
// This will ensure only the required type is returned from the function
var name1;
name1 = getName();
console.log(name1);
