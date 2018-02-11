import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FoodHomeComponent } from './components/food.component';
import { MealApiService } from './services/meal.api.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        FoodHomeComponent,
        ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'food-app',
                component: FoodHomeComponent
            }
        ])
    ],
    exports: [],
    providers: [MealApiService],
})
export class FoodieAppModule {

}