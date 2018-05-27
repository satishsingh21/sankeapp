import { Goti } from "./goti";

export class Player {
    private name : string;
    private goti : Goti;

    constructor(name : string){
        this.name = name;
        this.goti = new Goti();
    }

}
