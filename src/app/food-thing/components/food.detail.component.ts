import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from '../models/meal';
import { MealApiService } from '../services/meal.api.service';
import { element } from 'protractor';

@Component({
    selector: 'food-detail',
    templateUrl: '../templates/food.detail.component.html'
})
export class FoodDetailComponent implements OnInit {
    id: number;
    meal: Meal;
    ingredientsArray: any;

    constructor(private activatedRoute: ActivatedRoute, private webService: MealApiService) {
        this.meal = new Meal(); // --> Init objects to avoid undefined console errors
    }

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params['id'];
        this.ingredientsArray = [];
        this.webService.getMealById(this.id).subscribe(data => {
            this.meal = data;
            Object.keys(this.meal).map(key => {
                // console.log(`${key} - ${this.meal[key]}`);
                if (key.indexOf("strIngredient") != -1) {
                    let index = key.match(/\d/g);
                    if (this.meal[key]) {
                        this.ingredientsArray.push({ 'ingredient': this.meal[key], 'measure': this.meal['strMeasure' + index] });
                    }
                }
            });
        });
    }
}