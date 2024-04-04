
//We can provide the return type of an object too
function createUser ({name:string, price:number}) : {name:string, price:number, isActive:boolean} {
    return {
        name : "Jayesh",
        price : 1234,
        isActive : true
    }
}

const data = createUser({
    name : "Jayesh",
    price : 1234
});

console.log(data)


export {}

