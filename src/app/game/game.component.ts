import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  guess: number;
  secretNumber: number;
  attempts: number;
  message: string;
  gameOver: boolean;

  constructor() {
    this.startGame();
  }

  startGame() {
    this.secretNumber = Math.floor(Math.random() * 100) + 1;
    this.attempts = 0;
    this.message = '';
    this.gameOver = false;
  }

  checkGuess() {
    this.attempts++;

    if (this.guess === this.secretNumber) {
      this.message = 'Congratulations! You guessed it!';
      this.gameOver = true;
    } else if (this.guess < this.secretNumber) {
      this.message = 'Try a higher number.';
    } else {
      this.message = 'Try a lower number.';
    }

    this.guess = null;
  }

  resetGame() {
    this.startGame();
  }
}
