import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipes.service";
import { exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";
@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private httpClient: HttpClient, private recipeService: RecipeService,private authService:AuthService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        return this.httpClient.put("https://ng-course-recipe-book-3938e-default-rtdb.firebaseio.com/recipes.json", recipes).subscribe(response => {
            console.log(response);
        });
    }
    fetchRecipe() {//map is called on the array,map is sued to tranform the elements
        // return this.authService.user.pipe(take(1),exhaustMap(user=>{
            return this.httpClient.get<Recipe[]>("https://ng-course-recipe-book-3938e-default-rtdb.firebaseio.com/recipes.json",
           )
        .pipe(
        map(recipe => {
            return recipe.map(recipes => {
                return {...recipes, ingredients:recipes.ingredients ? recipes.ingredients :[]};
            });
//tap help in storing the data without altering
        }),tap(recipes=>{
            this.recipeService.setRecipes(recipes);
        }))
    }
}