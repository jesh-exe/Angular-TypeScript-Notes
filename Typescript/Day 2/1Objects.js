"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//We can provide the return type of an object too
function createUser(_a) {
    var string = _a.name, number = _a.price;
    return {
        name: "Jayesh",
        price: 1234,
        isActive: true
    };
}
var data = createUser({
    name: "Jayesh",
    price: 1234
});
console.log(data);
