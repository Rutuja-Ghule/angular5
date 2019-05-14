import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'minutesSecondsTime'})
export class MinutesSecondsTimePipe implements PipeTransform {
    transform(value: number): String {
        const minutes = Math.floor(value / 60);
        const seconds = value % 60;
        const min = minutes < 10 ? '0' + minutes : minutes;
        const sec = seconds < 10 ? '0' + seconds : seconds;
        const timerValue = min + ':' + sec;
        return timerValue;
    }
}
