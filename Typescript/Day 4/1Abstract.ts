//Same as Java, Abstract class must contain abstract methods

abstract class Camera {
    constructor(protected lens : number)
    {

    }
    abstract putFilter() : void;
}

class Instagram extends Camera{
    constructor(private burstTime : number , protected lens : number) {
        super(lens);
    }
    putFilter(): void{
        console.log("Filter Applied")
    }
}