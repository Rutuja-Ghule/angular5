import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
    selector: 'charts-home',
    template: 'Charts Home'
})
export class ChartsHomeComponent implements OnInit {
    ngOnInit(): void {
        console.log("In Charts Home component init");
    }

}