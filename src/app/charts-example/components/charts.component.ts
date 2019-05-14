import { Component } from '@angular/core';

@Component({
    selector: 'charts-home',
    templateUrl: '../templates/charts.component.html'
})
export class ChartsHomeComponent {
    project1 = 'Project 1';
    project1Completion: 0;
    project1Tasks: any;
    project2 = 'Project 2';
    project2Completion: 0;
    project2Tasks: any;

    constructor() {
        this.project1Tasks = {
            task1: 'undone',
            task2: 'undone',
            task3: 'undone',
            task4: 'undone',
            task5: 'undone',
            task6: 'undone',
            task7: 'undone',
        };
        this.project2Tasks = {
            task1: 'undone',
            task2: 'undone',
            task3: 'undone',
            task4: 'undone',
            task5: 'undone',
        };
    }

    changePercentageHandler(projectData: any) {
        console.log(projectData);
        if (projectData.project === this.project1) { this.project1Completion = projectData.percentage; }
        if (projectData.project === this.project2) { this.project2Completion = projectData.percentage; }
    }
}
