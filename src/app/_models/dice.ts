export class Dice {
    private diceNo : number;

    public giveNumber() : number {
        this.diceNo = Math.floor(Math.random() * 6) + 1;  //return no between 1 To 6;
        return this.diceNo;
    }

}
