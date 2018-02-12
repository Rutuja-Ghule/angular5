import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { Meal } from '../models/meal';

@Injectable()
export class MealApiService {

    baseURL = 'http://www.themealdb.com/api/json/v1/1/';

    constructor(private _http: Http) { }

    getRandomMeals(): Observable<Meal[]> {
        return this._http.get(this.baseURL + 'latest.php')
            .map(response => response.json().meals);
    }

    getAllCategories(): any {
        return this._http.get(this.baseURL + 'list.php?c=list')
            .map(response => response.json().meals);
    }

    getAllCuisines(): any {
        return this._http.get(this.baseURL + 'list.php?a=list')
            .map(response => response.json().meals);
    }

    getMealById(mealId: number): Observable<Meal> {
        return this._http.get(this.baseURL + 'lookup.php?i=' + mealId)
            .map(response => response.json().meals[0])
    }

    searchMealData(search: string): Observable<Meal[]> {
        return this._http.get(this.baseURL + 'search.php?s=' + search)
            .map(response => response.json().meals)
    }

    getMealByCategory(category: string): Observable<Meal[]> {
        return this._http.get(this.baseURL + 'filter.php?c=' + category)
            .map(response => response.json().meals);
    }


    getMealByCuisine(cuisine: string): Observable<Meal[]> {
        return this._http.get(this.baseURL + 'filter.php?a=' + cuisine)
            .map(response => response.json().meals);
    }
}