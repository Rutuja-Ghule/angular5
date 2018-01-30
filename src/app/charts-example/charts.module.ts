import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ChartsHomeComponent } from "./components/charts.component";

@NgModule({
    declarations: [ChartsHomeComponent],
    imports:[
        RouterModule.forChild([
            {
                path: 'charts-app',
                component: ChartsHomeComponent
            }
        ])
    ],
    exports:[],
    providers:[],
})
export class ChartsAppModule {

}