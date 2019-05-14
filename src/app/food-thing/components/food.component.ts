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
        this.data.meals = [];
        this.webService.searchMealData(searchInput).subscribe(data => {
            this.data.meals = data;
            this.data.resultString = this.data.meals ? `${searchInput} recipes` : `Sorry no results for ${searchInput}`;
        });
    }

    changeFilterOption($event) {
        const htmlElement = <HTMLInputElement>(event.target);
        this.data.currFilterOption = htmlElement.value;
        if (this.data.currFilterOption === 'cuisine') {
            this.data.filterOptions = this.data.cuisines;
        } else if (this.data.currFilterOption === 'category') {
            this.data.filterOptions = this.data.categories;
        }
    }

    filterMealData(filterBy: string) {
        this.data.meals = [];
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
        this.data.resultString = `${this.data.filterBy} ${this.data.currFilterOption} recipes`;
    }

    navigateTo(idMeal: number) {
        this.router.navigate(['food-app/meal', idMeal]);
    }

    // @Todo: Should we just make data members public????, research on best way to do it

    getMeals(): Meal[] { return this.data.meals; }

    getCategories(): string[] { return this.data.categories; }

    getCuisines(): string[] { return this.data.cuisines; }

    getCurrFilterOption(): string { return this.data.currFilterOption; }

    getFilterOptions(): string[] { return this.data.filterOptions; }

    getFilterBy(): string { return this.data.filterBy; }

    getResultString(): string { return this.data.resultString; }
}
