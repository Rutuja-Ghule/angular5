import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartsHomeComponent } from './components/charts.component';
import { DataService } from './services/data.service';
import { TasksProjectsComponent } from './components/tasks.projects.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';


// @Todo: Logic and design for radial progress is completelty wrong -- fix it
// @Todo: Create custom pipe to create space between string and number
// @Todo: Create d3 only - liquid fill guage

@NgModule({
    declarations: [
        ChartsHomeComponent,
        TasksProjectsComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        NgCircleProgressModule.forRoot({
            radius: 100,
            outerStrokeWidth: 16,
            innerStrokeWidth: 8,
            outerStrokeColor: "#78C000",
            innerStrokeColor: "#C7E596",
            animation: true,
            animationDuration: 300,
            showUnits: false,
            showBackground: false,
        }),
        RouterModule.forChild([
            {
                path: 'charts-app',
                component: ChartsHomeComponent
            }
        ])
    ],
    exports: [],
    providers: [],
})
export class ChartsAppModule {

}
