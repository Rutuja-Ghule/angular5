import { Injectable } from "@angular/core";
import { Meal } from "../models/meal";

@Injectable()
export class PersistMealDataService {
    meals: Meal[]; 
    categories: string[]; 
    cuisines: string[]; 
    currFilterOption = 'cuisine'; 
    filterOptions: string[]; 
    filterBy: string;  
    resultString: string; 
}