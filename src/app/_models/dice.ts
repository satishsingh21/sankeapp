export class  Dice {
    private diceNo : number;
    private static instance: Dice;
   
    private constructor(){}

    public static getInstance() : Dice{
        // Check is already initialized
        if(Dice.instance == null){
            // Create new object and assign to static instance
            Dice.instance = new Dice();
        }
        
        // Return static instance
        return Dice.instance;
    }
    
    public giveNumber() : number {
        this.diceNo = Math.floor(Math.random() * 6) + 1;  //return no between 1 To 6;
        return this.diceNo;
    }

}
