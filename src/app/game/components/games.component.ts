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
        this.startTicking = false;
    }
//Even if game works, there seems to be lot of complexity with state changes like timer starting, stopping and event changes, here state management tool would have been appropriate

    selectGameLevel(level: string) {
        switch (level) {
            case 'Beginner':
                this.gameHeight = 9;
                this.gameWidth = 9;
                this.gameBombs = 10;
                this.startTicking = false;
                break;
            case 'Intermediate':
                this.gameHeight = 16;
                this.gameWidth = 16;
                this.gameBombs = 40;
                this.startTicking = false;
                break;
            case 'Advanced':
                this.gameHeight = 16;
                this.gameWidth = 30;
                this.gameBombs = 99;
                this.startTicking = false;
                break;
        }
    }
}
