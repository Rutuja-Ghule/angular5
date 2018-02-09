import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FoodHomeComponent } from './components/food.component';

@NgModule({
    declarations: [FoodHomeComponent],
    imports: [
        RouterModule.forChild([
            {
                path: 'food-app',
                component: FoodHomeComponent
            }
        ])
    ],
    exports: [],
    providers: [],
})
export class FoodieAppModule {

}