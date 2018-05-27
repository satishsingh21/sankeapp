import { Player } from '../_models/player';
import { Ladder } from '../_models/ladder';
import { Snake } from '../_models/snake';
import { Dice } from '../_models/dice';
import { environment } from './../../environments/environment';

export class Game {
    public players: Player[];
    public ladders: Ladder[];
    public snakes: Snake[];
    public dice: Dice;
    
    // bug: handele two or more snakes or ladder having same head or tail position
    public constructor(nameOfPlayers : string[]) {
        // initialize player objects
        this.players = Player[nameOfPlayers.length];
        for(let i = 0; i < nameOfPlayers.length; i++){
            this.players[i] = new Player(nameOfPlayers[i]);
        }

        // initialize Snake objects
        this.snakes = Snake[environment.noOfSnakes];
        for (let i = 0; i < environment.noOfSnakes; i++) {
            let tailPos = Math.floor(Math.random() * 70) + 2;
            let headPos = Math.floor(Math.random() * 99) + (tailPos + 2);

            this.snakes[i] = Snake.factory(headPos, tailPos);
        }

        // initialize Ladder objects
        this.ladders = Ladder[environment.noOfLadder];
        for (let i = 0; i < this.ladders.length; i++) {
            let tailPos = Math.floor(Math.random() * 70) + 2;
            let headPos = Math.floor(Math.random() * 99) + (tailPos + 2);
            this.ladders[i] = Ladder.factory(headPos, tailPos);
        }

        // initialize dice object
        this.dice = Dice.getInstance();
    }
}
