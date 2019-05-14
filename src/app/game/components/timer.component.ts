import { Component } from '@angular/core';
import { TimerService } from '../services/timer.service';

@Component({
    selector: 'timer',
    templateUrl: '../templates/timer.component.html'
})
export class TimerComponent {

    constructor(public timerService: TimerService) {
    }
}
