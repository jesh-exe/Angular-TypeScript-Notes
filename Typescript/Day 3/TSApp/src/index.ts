console.log("Jayesh");

class User {
    constructor(private name : string) {
        
    }
 
    public get getName() : string {
        return this.name;
    }
    
    public set setName(name : string) {
        this.name = name;
    }   
}


const user = new User("Jayesh");
console.log(user.getName);
