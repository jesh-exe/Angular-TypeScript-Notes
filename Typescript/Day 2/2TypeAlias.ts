//Type Alias refers to creation of our custom types with any number of data types in it

type User = {
    name : string;
    email : string;
    price : number;
    isPaid : boolean;
}


//Here instead of writing whole object data, just make an type alias and use it conveniently
function createUser (user : User) : User {
    return {
        name : "jayesh",
        email : "jrmu@gm.com",
        price : 1234,
        isPaid : true
    }
}

console.log(createUser({
    name : "jayesh",
        email : "jrmu@gm.com",
        price : 1234,
        isPaid : true
}));



// We can combine more than 1 type into other using & operator to mix them all

type cardNumber = {
    cardNumber : number
}

type cardType = {
    cardType : string
}

type cardDetails = cardNumber & cardType & {
    cvv : number
}


export {}