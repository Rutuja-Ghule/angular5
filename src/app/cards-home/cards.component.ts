import { Component } from '@angular/core';
import { CARD_DATA } from './cards.data';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'charts-home',
    templateUrl: 'cards.component.html',
    styleUrls: ['../app.component.css']
})
export class CardsHomeComponent implements OnInit {
    ngOnInit() {
        //console.log(CARD_DATA);
    }

}
