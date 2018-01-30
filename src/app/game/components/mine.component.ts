import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MineModel } from "../mine";

@Component({
    selector: "mine-button",
    templateUrl: "../templates/mine.component.html",
    styleUrls: ['../../app.component.css']
})
export class MineComponent {
    @Input() hasBomb: boolean;
    @Input() rowIndex: number;
    @Input() colIndex: number;
    @Input() isClickable: boolean;
    @Input() mineValue: number;
    @Output() endGameEvent = new EventEmitter<MineModel>();
    @Output() expandAroundEvent = new EventEmitter<MineModel>();

    onClick() {
        this.isClickable = true;
        if (this.hasBomb) {
            //end the game, show all mines, reset timer
            this.endGameEvent.emit(new MineModel(this.hasBomb, this.rowIndex, this.colIndex));
        } else {
            this.expandAroundEvent.emit(new MineModel(this.hasBomb, this.rowIndex, this.colIndex));
        }
    }

}