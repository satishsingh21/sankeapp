import { Component, OnInit } from '@angular/core';
import { Game } from '../_models/game';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public game: Game;

  constructor(){
    //get value from html
    this.game = new Game(['A','B']);
  }

  ngOnInit() {
   
  }

  // dice onclick
  rollDice(){
    this.game.play();
  }

}
