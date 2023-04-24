import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { RecipeService } from "./recipes.service";
@Injectable({
    providedIn:'root'
})
//resolve is generic interface 
export class RecipeResolveService implements Resolve<Recipe[]>{
    constructor(private dataStorage:DataStorageService,private recipeService:RecipeService){}
    resolve(){
        const recipes=this.recipeService.getRecipes();
        if(recipes.length===0){
        return this.dataStorage.fetchRecipe();
        }
        else{
            return recipes;
        }
    }
}