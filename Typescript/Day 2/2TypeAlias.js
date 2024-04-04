"use strict";
//Type Alias refers to creation of our custom types with any number of data types in it
Object.defineProperty(exports, "__esModule", { value: true });
//Here instead of writing whole object data, just make an type alias and use it conveniently
function createUser(user) {
    return {
        name: "jayesh",
        email: "jrmu@gm.com",
        price: 1234,
        isPaid: true
    };
}
console.log(createUser({
    name: "jayesh",
    email: "jrmu@gm.com",
    price: 1234,
    isPaid: true
}));
