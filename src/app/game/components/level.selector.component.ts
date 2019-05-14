import { Component, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { TimerService } from '../services/timer.service';

@Component({
    selector: 'level-selector',
    templateUrl: '../templates/level.selector.component.html'
})
export class LevelSelectorComponent {
    gameLevel = 'Beginner';
    @Output() changeGameLevel = new EventEmitter<string>();

    constructor(private timerService: TimerService) {}

    changeLevel() {
        // console.log(this.gameLevel);
        this.timerService.stopTimer();
        this.timerService.resetTimer();
        this.changeGameLevel.emit(this.gameLevel);
    }

}
