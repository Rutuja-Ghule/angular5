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
        this.resultString = 'Latest';
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


    // @Todo: Should we just make data members public????, research on best way to do it

    public getMeals(): Meal[] { return this.meals; }

    public getCategories(): string[] { return this.categories; }

    public getCuisines(): string[] { return this.cuisines; }

    public getCurrFilterOption(): string { return this.currFilterOption; }

    public getFilterOptions(): string[] { return this.filterOptions; }

    public getFilterBy(): string { return this.filterBy; }

    public getResultString(): string { return this.resultString; }

}