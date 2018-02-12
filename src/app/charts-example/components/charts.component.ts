import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'charts-home',
    templateUrl: '../templates/charts.component.html'
})
export class ChartsHomeComponent implements OnInit {
    project1 = "Project 1";
    project1Completion: 0;
    project2 = "Project 2";
    project2Completion: 0;

    ngOnInit(): void {
        console.log('In Charts Home component init');
    }

    changePercentageHandler(projectData: any) {
        console.log(projectData);
        if (projectData.project === this.project1) { this.project1Completion = projectData.percentage }
        if (projectData.project === this.project2) { this.project2Completion = projectData.percentage }
    }
}
