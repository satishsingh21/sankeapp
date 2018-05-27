export class Goti {

    private position : number;
    private color : string;

    // max no of player  is playing would be 4
    private static colors : string[] = ['Red','Yellow','Green','Blue'];
    private static count:number = 0 ;


    constructor() {
        this.position = 1;
        this.color = Goti.colors[Goti.count];
        Goti.count++;
    }

    public pdatePosition(val:number):number{
       return  this.position + val
    }
}
