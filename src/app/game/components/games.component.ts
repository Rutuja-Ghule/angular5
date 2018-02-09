import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'game-home',
    templateUrl: '../templates/games.component.html'
})
export class GamesHomeComponent implements OnInit {
    gameHeight: number;
    gameWidth: number;
    gameBombs: number;
    startTicking: boolean;

    ngOnInit() {
        this.gameHeight = 9;
        this.gameWidth = 9;
        this.gameBombs = 10;
    }

    selectGameLevel(level: string) {
        console.log(level);
        switch (level) {
            case 'Beginner':
                this.gameHeight = 9;
                this.gameWidth = 9;
                this.gameBombs = 10;
                break;
            case 'Intermediate':
                this.gameHeight = 16;
                this.gameWidth = 16;
                this.gameBombs = 40;
                break;
            case 'Advanced':
                this.gameHeight = 16;
                this.gameWidth = 30;
                this.gameBombs = 99;
                break;
        }
        console.log(this.gameBombs);
    }
}