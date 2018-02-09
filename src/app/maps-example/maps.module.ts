import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { MapsHomeComponent } from "./components/maps.component";
import { SearchLocationComponent } from "./components/search.location.component";
import { ListLocationsComponent } from "./components/list.locations.component";
import { SaveLocationComponent } from "./components/save.location.component";
import { SearchSavedComponent } from "./components/search.saved.component";

@NgModule({
    declarations: [
        MapsHomeComponent,
        SearchLocationComponent,
        ListLocationsComponent,
        SaveLocationComponent,
        SearchSavedComponent
    ],
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