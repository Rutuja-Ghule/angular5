import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MealApiService } from '../services/meal.api.service';
import { Meal } from '../models/meal';
import { PersistMealDataService } from '../services/persist.data.service';

@Component({
    selector: 'foodie-home',
    templateUrl: '../templates/food.component.html',
    styleUrls: ['../templates/food.css']
})
export class FoodHomeComponent {

    mealDetail: Meal;

    constructor(private webService: MealApiService, private router: Router, private data: PersistMealDataService) {
        data.init();
    }

    searchMealData(searchInput: string) {
        this.webService.searchMealData(searchInput).subscribe(data => {
            this.data.meals = data;
        });
        this.data.resultString = `Search Result for ${searchInput}`;
    }

    changeFilterOption($event) {
        let htmlElement = <HTMLInputElement>(event.target);
        this.data.currFilterOption = htmlElement.value;
        if (this.data.currFilterOption === 'cuisine')
            this.data.filterOptions = this.data.cuisines;
        else if (this.data.currFilterOption === 'category')
            this.data.filterOptions = this.data.categories;
    }

    filterMealData(filterBy: string) {
        this.data.filterBy = filterBy;
        if (this.data.currFilterOption === 'cuisine') {
            this.webService.getMealByCuisine(filterBy).subscribe(data => {
                this.data.meals = data;
            });
        } else if (this.data.currFilterOption === 'category') {
            this.webService.getMealByCategory(filterBy).subscribe(data => {
                this.data.meals = data;
            });
        }
        this.data.resultString = `Filter Result for ${this.data.filterBy} ${this.data.currFilterOption}`;
    }

    navigateTo(idMeal: number) {
        this.router.navigate(['food-app/meal', idMeal]);
    }
}
