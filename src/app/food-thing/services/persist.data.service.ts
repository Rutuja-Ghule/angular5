import { Injectable } from "@angular/core";
import { Meal } from "../models/meal";
import { MealApiService } from "./meal.api.service";

@Injectable()
export class PersistMealDataService {
    meals: Meal[];
    categories: string[];
    cuisines: string[];
    currFilterOption = 'cuisine';
    filterOptions: string[];
    filterBy: string;
    resultString: string;

    constructor(private webService: MealApiService) {
        this.categories = [];
        this.cuisines = [];
        this.webService.getRandomMeals().subscribe(data => {
            this.meals = data;
        });
        this.resultString = 'Latest recipes';
    }

    init() {
        if (this.categories.length === 0) {
            this.webService.getAllCategories().subscribe(data => {
                data.forEach(element => { this.categories.push(element.strCategory) });
            });
        }

        if (this.cuisines.length === 0) {
            this.webService.getAllCuisines().subscribe(data => {
                data.forEach(element => { this.cuisines.push(element.strArea) });
            });
        }

        this.filterOptions = this.cuisines;
    }

}