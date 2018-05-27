export class Ladder {
    // head ladder top position
    private headPosition:number;
    private tailPosition:number;

    private constructor(headPos:number, tailPos:number) {
        this.headPosition=headPos;
        this.tailPosition=tailPos;
    }

    public static factory(headPos:number, tailPos:number):Ladder{
        // validate
        if (headPos < 0 ||
            headPos > 100 ||
            tailPos < 0 ||
            tailPos > 100 ||
            headPos % 1 != 0 ||
            tailPos % 1 != 0 ||
            headPos < tailPos) {
            return null;
        }

        // create ladder object
        let ladder : Ladder = new Ladder(headPos, tailPos);

        // return object
        return ladder;
        
    }

    public canMoveUp(gotiCurrentPos : number) : number{
        return this.headPosition;
    }
}
