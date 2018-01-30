import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { MapsHomeComponent } from "./components/maps.component";

@NgModule({
    declarations: [MapsHomeComponent],
    imports: [
        RouterModule.forChild([
            {
                path: 'map-app',
                component: MapsHomeComponent
            }
        ])
    ],
    exports: [],
    providers: [],
})
export class MapAppModule {

}