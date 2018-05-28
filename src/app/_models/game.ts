import { Player } from '../_models/player';
import { Ladder } from '../_models/ladder';
import { Snake } from '../_models/snake';
import { Dice } from '../_models/dice';
import { environment } from './../../environments/environment';

export class Game {
    public players: Player[]=[];
    public ladders: Ladder[]=[];
    public snakes: Snake[]=[];
    public dice: Dice;
    public nextTurn : number;
    
    // bug: handele two or more snakes or ladder having same head or tail position

    // do n't move player position if it reach near 100 and dice have greater number
    public constructor(nameOfPlayers : string[]) {  
        this.nextTurn = 0;
        // initialize player objects
        //let playerArray = nameOfPlayers;
        this.players = [];
        for(let i = 0; i < nameOfPlayers.length; i++){
            this.players[i] = new Player(nameOfPlayers[i]);
            //alert(""+i+ " player is initialized");
        }

        // initialize Snake objects
        //this.snakes = Snake[environment.noOfSnakes];
        for (let i = 0; i < environment.noOfSnakes; i++) {
            let tailPos = Math.floor(Math.random() * 70) + 2;
            let headPos = Math.floor(Math.random() * 99) + (tailPos + 2);

            this.snakes[i] = Snake.factory(headPos, tailPos);
        }

        // initialize Ladder objects
        //this.ladders = Ladder[environment.noOfLadder];
        for (let i = 0; i < this.ladders.length; i++) {
            let tailPos = Math.floor(Math.random() * 70) + 2;
            let headPos = Math.floor(Math.random() * 99) + (tailPos + 2);
            this.ladders[i] = Ladder.factory(headPos, tailPos);
        }

        // initialize dice object
        this.dice = Dice.getInstance();
    }

    

    public play () : number {
        // return value from dice
        let diceValue = this.dice.giveNumber();

        // update player attempt
        let playerNo = this.next();

        // update player position
        this.players[playerNo].goti.moveForward(diceValue);

        // get new player position
        //let newPosition = this.players[playerNo].goti.position;

        // check for snake if exist update player position
        this.isSnakeAtPos(this.players[playerNo].goti.position, playerNo);

        // check for ladder if exist update player position
        this.isLadderAtPos(this.players[playerNo].goti.position, playerNo);

        // do final check for position
        let finalPos= this.players[playerNo].goti.position;
        if(finalPos == 100){
            alert("winner is " + this.players[playerNo].name + "wins");
        }

        // return position
        return finalPos;

    }

    private isSnakeAtPos(newPosition : number, playerNo : number) : void{
        for(let i=0; i < this.snakes.length;i++)
        {
            let snakebitePos = this.snakes[i].canBite(newPosition);
            if(snakebitePos > 0){
                this.players[playerNo].goti.updatePosition(snakebitePos);
                break;
            }
        }
    }

    private isLadderAtPos(newPosition : number, playerNo : number) : void{
        for(let i=0 ; i < this.ladders.length;i++)
        {
            let ladderPos =this.ladders[i].canMoveUp(newPosition);
            if(ladderPos > 0){
                this.players[playerNo].goti.updatePosition(ladderPos);
                break;
            }
        }
    }
    
    private next() : number{
        let nTurn = this.nextTurn % this.players.length;
        this.nextTurn++; 
        return nTurn;
     }
}
