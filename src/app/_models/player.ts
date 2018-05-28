import { Goti } from "./goti";

export class Player {
    public name : string;
    public goti : Goti;

    public constructor(name : string){
        this.name = name;
        this.goti = new Goti();
    }

    // public updatePosition(val){
    //     //pass dice value to 
    //     this.goti.updatePosition(val) 
    // }
}
