import { Component, Output, EventEmitter, Input, SimpleChanges } from "@angular/core";

@Component({
    selector: 'level-selector',
    templateUrl: '../templates/level.selector.component.html'
})
export class LevelSelectorComponent {
    gameLevel: string = "Beginner";
    @Output() changeGameLevel = new EventEmitter<string>();

    changeLevel() {
        //console.log(this.gameLevel);
        this.changeGameLevel.emit(this.gameLevel);
    }

}