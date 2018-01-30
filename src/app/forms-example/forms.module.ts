import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsHomeComponent } from "./components/forms.component";

@NgModule({
    declarations: [FormsHomeComponent],
    imports:[
        RouterModule.forChild([
            {
                path: 'forms-app',
                component: FormsHomeComponent
            }
        ])
    ],
    exports:[],
    providers:[],
})
export class FormsAppModule {

}