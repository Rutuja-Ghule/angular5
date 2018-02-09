import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'reset',
    templateUrl: '../templates/reset.component.html'
})
export class ResetComponent {

    constructor(private location: Location) { }

    onClick() {
        location.reload();
    }
}
