import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FoodHomeComponent } from './components/food.component';
import { MealApiService } from './services/meal.api.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FoodDetailComponent } from './components/food.detail.component';
import { PersistMealDataService } from './services/persist.data.service';

// @Todo: Api call should made in routing module using resolve
// @Todo: Handling error in api calls
// @Todo: Showing error when internet is disconnected

@NgModule({
    declarations: [
        FoodDetailComponent,
        FoodHomeComponent
        ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'food-app',
                component: FoodHomeComponent
            },
            {
                path: 'food-app/meal/:id',
                component: FoodDetailComponent
            }
        ])
    ],
    exports: [],
    providers: [
        MealApiService,
        PersistMealDataService
    ],
})
export class FoodieAppModule {

}