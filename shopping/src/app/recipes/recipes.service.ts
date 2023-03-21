import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list-service.service";
import { Recipe } from "./recipe.model";

 @Injectable()
export class RecipeService{
  recipeChanged=new Subject<Recipe[]>();
    // recipeSelected=new Subject<Recipe>();
  private  recipes:Recipe[]=[
        new Recipe('A test Recipe','This is simply a test','https://www.tasteofhome.com/wp-content/uploads/2017/09/exps23273_CW163681C12_11_2b.jpg',
        [
          new Ingredient('Meat',1),
          new Ingredient('chicken',4)
        ]),
        new Recipe('A simple Recipe','This is sample test','https://www.bing.com/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
        [
          new Ingredient('Fish',2),
          new Ingredient('mutton',6)
        ])
    
      ];
   recipeSelected: any;
      constructor(private slService:ShoppingListService){}
      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index:number){
        return this.recipes[index];

      }
      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }
      deleteRecipe(index:number)
      {
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());

      }
      updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index]=newRecipe;
        this.recipeChanged.next(this.recipes.slice())
      }
      addIngredientsToShoppingList(ingredients:Ingredient[]){
        // console.log(this.slService.getIngredients())
        this.slService.addIngredients(ingredients);
        //  console.log(this.slService.getIngredients())
      }
}