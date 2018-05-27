import { Goti } from "./goti";

export class Player {
    private name : string;
    private goti : Goti;

    public constructor(name : string){
        this.name = name;
        this.goti = new Goti();
    }

}
