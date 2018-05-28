import { Component, OnInit } from '@angular/core';
import { Game } from '../_models/game';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public game: Game;
  public playerposition_1:number;
  public playerposition_2:number;

  constructor(){
    //get value from html
    this.game = new Game(['A','B']);
    this.playerposition_1=this.game.players[0].goti.getPosition();
    this.playerposition_2=this.game.players[1].goti.getPosition();
  }

  ngOnInit() {
   
  }

  // dice onclick
  rollDice(){
    let newPos=this.game.play();
    this.playerposition_1=newPos;

  }

}
