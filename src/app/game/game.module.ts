import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GamesHomeComponent } from "./components/games.component";
import { MineGridComponent } from "./components/mine.grid.component";
import { MineComponent } from "./components/mine.component";
import { BrowserModule } from "@angular/platform-browser";
import { ResetComponent } from "./components/reset.component";
import { LevelSelectorComponent } from "./components/level.selector.component";
import { TimerComponent } from "./components/timer.component";
import { SimpleTimer } from 'ng2-simple-timer';

// @Todo: Separate minesweeper game logic in service and component
// @Todo: Implement timer functionality
// @Todo: Resest button should not load whole page but only mine grid and timer
// @Todo: When game ends disable all buttons and apply proper css

@NgModule({
    declarations: [
        GamesHomeComponent,
        ResetComponent,
        LevelSelectorComponent,
        TimerComponent,
        MineGridComponent,
        MineComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule.forChild([
            {
                path: 'games-app',
                component: GamesHomeComponent
            }
        ])
    ],
    exports: [],
    providers: [SimpleTimer],
})
export class GamesAppModule {

}