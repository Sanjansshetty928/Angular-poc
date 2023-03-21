import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";
 @Injectable()
export class ShoppingListService{
    ingredientChange=new Subject<Ingredient[]>();
    startedEdit=new Subject<number>();
    // constructor(private slService:ShoppingList){}
   private ingredients:Ingredient[]=[
        new Ingredient('Tomato',1400),
        new Ingredient('Carrot',500)
      ];

      getIngredients(){
        // console.log(this.ingredients)    
        return this.ingredients.slice();
        
      }
      updateIngredients(index:number,newIngredient:Ingredient){
        this.ingredients[index]=newIngredient;
        this.ingredientChange.next(this.ingredients.slice());

      }
      getIngredient(index:number){
        return this.ingredients[index];
      }
      deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientChange.next(this.ingredients.slice());
      }

      addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChange.next(this.ingredients.slice());
      }
      addIngredients(ingredients:Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        this.ingredients.push(...ingredients);
        this.ingredientChange.next(this.ingredients.slice());

        }

        // constructor() {
        //     this.ingredientChange.emit(this.ingredients.slice());

        // }

      }


