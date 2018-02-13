import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'task-project',
    templateUrl: '../templates/tasks.projects.component.html'
})
export class TasksProjectsComponent {
    @Input() projectName: string;
    @Output() changePercentageEvent = new EventEmitter<any>();
    projectTasks: any;
    projectCompletion: number;
    objectKeys = Object.keys;

    constructor(private dataService: DataService) {
        this.projectTasks = dataService.getAllTasks();
    }

    taskStatusChange($event) {
        let htmlElement = <HTMLInputElement>event.target;
        if (htmlElement.checked) {
            this.projectTasks[htmlElement.value] = 'done';
        } else {
            this.projectTasks[htmlElement.value] = 'undone';
        }
        let tasks = Object.keys(this.projectTasks);
        let completedTasks = 0;
        tasks.forEach(element => {
            if (this.projectTasks[element] === 'done') { completedTasks++ }
        })
        this.projectCompletion = (completedTasks / (tasks.length)) * 100;
        this.changePercentageEvent.emit({ project: this.projectName, percentage: this.projectCompletion });
    }
}
