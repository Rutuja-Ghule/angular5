import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'task-project',
    templateUrl: '../templates/tasks.projects.component.html'
})
export class TasksProjectsComponent {
    @Input() projectName: string;
    @Output() changePercentageEvent = new EventEmitter<any>();
    @Input() projectTasks: any;
    projectCompletion: number;
    objectKeys = Object.keys;

    taskStatusChange(event) {
        const htmlElement = <HTMLInputElement>event.target;
        if (htmlElement.checked) {
            this.projectTasks[htmlElement.value] = 'done';
        } else {
            this.projectTasks[htmlElement.value] = 'undone';
        }
        const tasks = Object.keys(this.projectTasks);
        console.log(`${this.projectName} - ${this.projectTasks}`);
        let completedTasks = 0;
        tasks.forEach(element => {
            if (this.projectTasks[element] === 'done') { completedTasks++; }
        });
        this.projectCompletion = (completedTasks / (tasks.length)) * 100;
        this.changePercentageEvent.emit({ project: this.projectName, percentage: this.projectCompletion });
    }
}
