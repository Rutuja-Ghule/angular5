import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    taskMap: any;
    
    constructor() {
        this.taskMap = {
            task1: 'undone',
            task2: 'undone',
            task3: 'undone',
            task4: 'undone',
            task5: 'undone',
            task6: 'undone',
        };
    }

    setTaskStatus(taskName: string, status: string) {
        this.taskMap.get(taskName).set(status);
    }

    getAllTasks() : Map < string, string > {
        return this.taskMap;
    }
}
