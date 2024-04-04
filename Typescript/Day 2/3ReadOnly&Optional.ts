//Readonly allows not to modify the value of an attribute of object of type

type User = {
    readonly id : number    //Readonly
    name : string;
    isPaid : boolean;
    creditCard ?: number    //Optional
}


//No need to provide details for creditCard as the property is optional
let user : User = {
    id : 12,
    name : "Jayesh",
    isPaid : true
}

//This is not allowed as id is an readonly property
// user.id = 122

export {}

