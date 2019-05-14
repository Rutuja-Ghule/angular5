import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
    ticks = 0;
    interval;

    startTimer() {
        this.interval = setInterval(() => {
            this.ticks++;
        }, 1000);
     }

     stopTimer() {
         clearInterval(this.interval);
     }

     resetTimer() {
         this.ticks = 0;
     }
}
