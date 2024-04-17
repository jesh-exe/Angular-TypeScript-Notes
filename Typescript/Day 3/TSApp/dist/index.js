"use strict";
console.log("Jayesh");
class User {
    constructor(name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
}
const user = new User("Jayesh");
console.log(user.getName);
